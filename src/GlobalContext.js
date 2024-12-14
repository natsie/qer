import { createContext, useReducer } from 'react';
import catalogue from './catalogue';

const initialGlobalState = {
  cart: {
    opened: false,
    items: new Map(),
  },
  catalogue, // This will be populated later
};
const GlobalContext = createContext(initialGlobalState);

const reducer = (state, dispatchObj) => {
  const { action, data } = dispatchObj
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
        catalogue: { ...data.catalogue }
      }
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialGlobalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
