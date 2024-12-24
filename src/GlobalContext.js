import { createContext, useContext, useReducer } from "react";
//import catalogue from "./catalogue";

const igs = {
  cart: {
    opened: false,
    items: new Map(),
  },
  catalogue: undefined, // This will be populated later
};
const GlobalContext = createContext(igs);

const reducer = (state, dispatchObj) => {
  const { action, data } = dispatchObj;
  const clone = { ...state };
  switch (action) {
    case "TOGGLE_CART":
      clone.cart.opened = !clone.cart.opened;
      return clone;
    case "UPDATE_CATALOGUE":
      clone.catalogue = data.catalogue;
      return clone;
    default:
      return clone;
  }
};

const GlobalProvider = (props) => {
  const context = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, context);
  return props.value ? (
    <GlobalContext.Provider value={props.value}>{props.children}</GlobalContext.Provider>
  ) : (
    <GlobalContext.Provider value={{ state, dispatch }}>{props.children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
