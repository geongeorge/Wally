/** @format */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";

import get from "lodash/get";

const sizeOptions = [
  {
    width: 800,
    height: 1000,
    name: "Phone",
  },
  {
    width: 1400,
    height: 1300,
    name: "Desktop",
  },
  {
    width: 400,
    height: 400,
    name: "Custom",
    custom: true,
  },
];

function TextInput() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.text);
  const canvasProps = useSelector((state) => state);

  const [sizeOption, setSizeOption] = useState(0);
  const [isCustomSize, setIsCustomSize] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState({
    text: false,
    bg: false,
  });

  const setSize = (size) => {
    dispatch({
      type: "setWidth",
      payload: size.width,
    });
    dispatch({
      type: "setHeight",
      payload: size.height,
    });
  };

  const setProps = (props) => {
    dispatch({
      type: "setProps",
      payload: { ...props },
    });
  };

  const changeSizeOption = ({ target }) => {
    const option = target.value;
    setSizeOption(option);
    const sizeValues = sizeOptions[option];
    if (sizeValues) {
      setSize(sizeValues);
    }

    setIsCustomSize(get(sizeValues, "custom", false));
    console.log(target.value, sizeValues);
  };

  return (
    <div className="text-input">
      <textarea
        className="text-input__field"
        value={text}
        onChange={({ target }) => {
          dispatch({
            type: "setText",
            payload: target.value,
          });
        }}
      />
      <div className="text-input__options">
        Image Size:{" "}
        <select value={sizeOption} onChange={changeSizeOption}>
          {sizeOptions.map((el, index) => (
            <option value={index} key={index}>
              {el.name}
            </option>
          ))}
        </select>
        <section className="text-input__controls">
          <div>
            <label>Width: </label>
            <input
              type="number"
              value={canvasProps.width}
              onChange={({ target }) => {
                dispatch({
                  type: "setWidth",
                  payload: parseInt(target.value),
                });
              }}
              disabled={!isCustomSize}
            ></input>
            <label>Height: </label>
            <input
              type="number"
              value={canvasProps.height}
              onChange={({ target }) => {
                dispatch({
                  type: "setHeight",
                  payload: parseInt(target.value),
                });
              }}
              disabled={!isCustomSize}
            ></input>
          </div>
          <div>
            <div className="color-picker">
              <label>Font Color: </label>
              <input
                value={canvasProps.textColor}
                onChange={({ target }) => {
                  setProps({ textColor: target.value });
                }}
                onFocus={() => {
                  setShowColorPicker({ text: true, bg: false });
                }}
                onBlur={() => {
                  setShowColorPicker({ text: false, bg: false });
                }}
              ></input>
              {showColorPicker.text && (
                <HexColorPicker
                  color={canvasProps.textColor}
                  onChange={(value) => {
                    console.log(value);
                    setProps({ textColor: value });
                  }}
                />
              )}
            </div>

            <div className="color-picker">
              <label>Bg Color: </label>
              <input
                value={canvasProps.bgColor}
                onChange={({ target }) => {
                  setProps({ bgColor: target.value });
                }}
                onFocus={() => {
                  setShowColorPicker({ text: false, bg: true });
                }}
                onBlur={() => {
                  setShowColorPicker({ text: false, bg: false });
                }}
              ></input>
              {showColorPicker.bg && (
                <HexColorPicker
                  color={canvasProps.bgColor}
                  onChange={(value) => {
                    console.log(value);
                    setProps({ bgColor: value });
                  }}
                />
              )}
            </div>
          </div>
          <div>
            <label>Font Size: </label>
            <input
              type="number"
              value={canvasProps.fontSize}
              onChange={({ target }) => {
                setProps({ fontSize: target.value });
              }}
            ></input>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TextInput;
