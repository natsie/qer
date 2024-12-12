import "./App.css";
import AppHeader from "./components/default/AppHeader/AppHeader";
import AppFooter from "./components/default/AppFooter/AppFooter";
import Catalogue from "./components/default/Catalogue/Catalogue";
import Cart from "./components/default/Cart/Cart";
import { useEffect, useReducer } from "react";

const initialGlobalState = {
  cart: {
    opened: false,
    items: new Map(),
  },
  wishlist: {
    opened: false,
    items: new Map(),
  },
  catalogue: {
    ...(await import("./catalogue.js")).default,
  },
};
function dispatchGlobalStateHandler(state, dispatch) {
  function toggle(obj, prop) {
    obj[prop] = !obj[prop];
  }
  let [action, ...target] = dispatch.action.split("-");
  switch (action) {
    case "toggle":
      let obj = state;
      for (const p of target.slice(0, -1)) obj = obj[p];
      toggle(obj, target[target.length - 1]);
      break;
  }
  return state;
}
function App() {
  const [globalState, dispatchGlobalState] = useReducer(dispatchGlobalStateHandler, initialGlobalState);
  useEffect(() => {
    document.addEventListener("keydown", ({ key }) => {
      key === "c" && dispatchGlobalState({ action: "toggle-cart-opened" });
    });
  }, []);
  console.log(globalState);
  return (
    <>
      <AppHeader></AppHeader>
      <Catalogue></Catalogue>
      {globalState.cart.opened && <Cart></Cart>}
      <AppFooter></AppFooter>
    </>
  );
}

export default App;

// ([{}]+[])[(!![]<<!![])+!![]] + ([][[]]+[])[![]+![]] + (![]+[])[(!![]<<!![])+!![]] + ([{}]+[])[(((!![]<<!![])+!![])<<(!![]+!![]))+!![]] + (![]*![]) + ([{}]+[])[(!![]<<!![])+!![]] + (![]+[])[(!![]<<!![])+!![]]
