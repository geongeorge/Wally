/** @format */
import { useSelector } from "react-redux";
import { createRef, useCallback, useEffect } from "react";
import get from "lodash/get";

import canvasTxt from "canvas-txt";

const drawCanvas = (ref, text, props) => {
  const c = ref.current;
  c.width = get(props, "width", 400);
  c.style.width = `${c.width}px`;
  c.height = get(props, "height", 400);
  c.style.height = `auto`;

  const ctx = c.getContext("2d");

  ctx.fillStyle = get(props, "bgColor", "#000");
  ctx.fillRect(0, 0, c.width, c.height);

  ctx.fillStyle = get(props, "textColor", "#fff");

  canvasTxt.font = "Verdana";
  canvasTxt.fontSize = get(props, "fontSize", 20);
  canvasTxt.align = "left";
  canvasTxt.debug = false;

  canvasTxt.drawText(
    ctx,
    text,
    c.width * 0.04,
    0,
    c.width - c.width * 0.08,
    c.height
  ); // 4% padding
  console.log();
};

function WallCanvas() {
  const text = useSelector((state) => state.text);
  const canvasProps = useSelector((state) => state);

  const ref = createRef(null);

  const paintCanvas = useCallback(() => {
    drawCanvas(ref, text, canvasProps);
  }, [ref, text, canvasProps]);

  useEffect(() => {
    console.log(text);
    paintCanvas();
  }, [text, canvasProps, paintCanvas]);

  const downloadImage = function (event) {
    var image = ref.current.toDataURL("image/jpg");
    event.target.href = image;
  };

  return (
    <div className="canvas">
      <canvas ref={ref} />

      <div>
        <a download="image.jpg" href="/" onClick={downloadImage}>
          Download image
        </a>
      </div>
    </div>
  );
}

export default WallCanvas;
