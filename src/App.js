import "./App.css";
import { useEffect, useContext } from "react";
import AppHeader from "./components/default/AppHeader/AppHeader";
import AppFooter from "./components/default/AppFooter/AppFooter";
import Catalogue from "./components/default/Catalogue/Catalogue";
import Cart from "./components/default/Cart/Cart";
import catalogue from "./catalogue.js";
import { GlobalContext } from "./GlobalContext";

// function handleKeyDown({ key, repeat }) {
//   if (key === "c" && !repeat) {
//     this.d({ ...this.s, cart: { ...this.s.cart, opened: !this.s.cart.opened } });
//   }
// }

function handleKeyDown(context) {
  return ({ key, repeat }) => {
    console.log("Key down pressed", key, repeat);
    console.log("Logging context", context);
    if (key === "c" && !repeat) {
      context?.dispatch?.({ action: "TOGGLE_CART" });
    }
  };
}

function App() {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const _handleKeyDown = handleKeyDown(globalContext);
    document.addEventListener("keydown", _handleKeyDown);

    //globalContext.dispatch({ action: "UPDATE_CATALOGUE", data: { catalogue } });
    return () => {
      document.removeEventListener("keydown", _handleKeyDown);
    };
    // eslint-disable-next-line
  }, [globalContext.catalogue?.lastUpdate]);

  console.log("App context", JSON.stringify(globalContext, null, 2));

  return (
    <>
      <GlobalContext.Provider value={{ ...globalContext, catalogue }}>
        <AppHeader />
        <Catalogue />
        <Cart />
        <AppFooter />
      </GlobalContext.Provider>
    </>
  );
}

export default App;

// ([{}]+[])[(!![]<<!![])+!![]] + ([][[]]+[])[![]+![]] + (![]+[])[(!![]<<!![])+!![]] + ([{}]+[])[(((!![]<<!![])+!![])<<(!![]+!![]))+!![]] + (![]*![]) + ([{}]+[])[(!![]<<!![])+!![]] + (![]+[])[(!![]<<!![])+!![]]
