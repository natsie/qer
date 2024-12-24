import "./App.css";
import AppHeader from "./components/default/AppHeader/AppHeader";
import AppFooter from "./components/default/AppFooter/AppFooter";
import Catalogue from "./components/default/Catalogue/Catalogue";
import Cart from "./components/default/Cart/Cart";
import catalogue from "./catalogue.js";
import { useEffect, useContext, useRef } from "react";
import { GlobalContext } from "./GlobalContext";

function handleKeyDown({ key, repeat }) {
  if (key === "c" && !repeat) {
    this.d({ ...this.s, cart: { ...this.s.cart, opened: !this.s.cart.opened } });
  }
}

function App() {
  const globalContext = useContext(GlobalContext);
  const cartOpened = useRef(false);

  useEffect(() => {
    const eh = () => (cartOpened.current = !cartOpened.current);
    document.addEventListener("keydown", eh);

    //globalContext.dispatch({ action: "UPDATE_CATALOGUE", data: { catalogue } });
    return () => document.removeEventListener("keydown", eh);
    // eslint-disable-next-line
  }, [globalContext.catalogue?.lastUpdate]);

  return (
    <GlobalContext.Provider value={{ ...globalContext, catalogue }}>
      <AppHeader />
      <Catalogue />
      {cartOpened.current && <Cart />}
      <AppFooter />
    </GlobalContext.Provider>
  );
}

export default App;

// ([{}]+[])[(!![]<<!![])+!![]] + ([][[]]+[])[![]+![]] + (![]+[])[(!![]<<!![])+!![]] + ([{}]+[])[(((!![]<<!![])+!![])<<(!![]+!![]))+!![]] + (![]*![]) + ([{}]+[])[(!![]<<!![])+!![]] + (![]+[])[(!![]<<!![])+!![]]
