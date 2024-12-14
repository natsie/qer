import "./App.css";
import AppHeader from "./components/default/AppHeader/AppHeader";
import AppFooter from "./components/default/AppFooter/AppFooter";
import Catalogue from "./components/default/Catalogue/Catalogue";
import Cart from "./components/default/Cart/Cart";
import catalogue from "./catalogue.js";
import { useEffect, useContext } from "react";
import { GlobalProvider, GlobalContext } from "./GlobalContext";


function handleKeyDown({ key, repeat }) {
  if (key === "c" && !repeat) {
    this.dispatch({ action: "TOGGLE_CART" });
  }
}

function App() {
  const globalContext = useContext(GlobalContext);

  useEffect(() => {
    const _handleKeyDown = handleKeyDown.bind(globalContext)
    document.addEventListener("keydown", _handleKeyDown);

    globalContext.dispatch({ action: "UPDATE_CATALOGUE", data: { catalogue } })
    return () => {
      document.removeEventListener("keydown", _handleKeyDown);
    };
    // eslint-disable-next-line
  }, [globalContext.catalogue?.lastUpdate]);

  return (
    <GlobalProvider>
      <AppHeader />
      <Catalogue />
      {globalContext.state.cart.opened && <Cart />}
      <AppFooter />
    </GlobalProvider>
  );
}

export default App;

// ([{}]+[])[(!![]<<!![])+!![]] + ([][[]]+[])[![]+![]] + (![]+[])[(!![]<<!![])+!![]] + ([{}]+[])[(((!![]<<!![])+!![])<<(!![]+!![]))+!![]] + (![]*![]) + ([{}]+[])[(!![]<<!![])+!![]] + (![]+[])[(!![]<<!![])+!![]]
