/** @format */
import { useSelector, useDispatch } from "react-redux";

function App() {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <input
        value={text}
        onChange={({ target }) => {
          dispatch({
            type: "setText",
            payload: target.value,
          });
        }}
      />

      <p>{text}</p>
    </div>
  );
}

export default App;
