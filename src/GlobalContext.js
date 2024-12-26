import { createContext, useContext, useReducer } from "react";
import catalogue from "./catalogue";
//import catalogue from "./catalogue";

const igs = {
  cart: {
    opened: false,
    items: new Map(),
  },
  catalogue: undefined, // This will be populated later
};
const GlobalContext = createContext(igs);

const reducer = (state, { action, data }) => {
  console.log("Dispatch", action);
  switch (action) {
    case "TOGGLE_CART":
      console.log("state", state);
      return {
        ...state,
        cart: {
          ...state.cart,
          opened: !state.cart.opened,
        },
      };
    case "UPDATE_CATALOGUE":
      return {
        ...state,
        catalogue: data.catalogue,
      };
    default:
      return state;
  }
};

const GlobalProvider = (props) => {
  const context = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, context);
  // return props.value ? (
  //   <GlobalContext.Provider value={props.value}>
  //     {props.children}
  //   </GlobalContext.Provider>
  // ) : (
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
