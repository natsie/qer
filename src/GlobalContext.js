import { createContext, useContext, useReducer } from "react";

const igs = {
  cart: {
    opened: false,
    items: new Map(),
  },
  catalogue: undefined, // This will be populated later
};
const GlobalContext = createContext(igs);

const reducer = (state, { action, data }) => {
  switch (action) {
    case "TOGGLE_CART":
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

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
