/** @format */
const base = {
  text: "ss",
  width: 800,
  height: 900,
  textColor: "#f1faee",
  bgColor: "#1d3557",
  fontSize: 70,
  font: 'Open Sans',
  align: "center",
};

const reducer = (state = base, action) => {
  const { payload, type } = action;

  switch (type) {
    case "setFont":
      return {
        ...state,
        font: payload,
      };
    case "setText":
      return {
        ...state,
        text: payload,
      };
    case "setWidth":
      return {
        ...state,
        width: payload,
      };
    case "setHeight":
      return {
        ...state,
        height: payload,
      };
    case "setProps":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default reducer;
