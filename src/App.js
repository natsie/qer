import "./App.css";
import { useEffect } from "react";
import AppHeader from "./components/default/AppHeader/AppHeader";
import AppFooter from "./components/default/AppFooter/AppFooter";
import Catalogue from "./components/default/Catalogue/Catalogue";
import Cart from "./components/default/Cart/Cart";
import catalogue from "./catalogue.js";
import { GlobalContext } from "./GlobalContext";
import { useGlobalContext } from "./hooks/useGlobalContext.js";

function App() {
  const globalContext = useGlobalContext();

  function handleKeyDown({ key, repeat }) {
    if (key === "c" && !repeat) {
      globalContext?.dispatch?.({ action: "TOGGLE_CART" });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GlobalContext.Provider value={{ ...globalContext, catalogue }}>
      <AppHeader />
      <Catalogue />
      <Cart />
      <AppFooter />
    </GlobalContext.Provider>
  );
}

export default App;

// ([{}]+[])[(!![]<<!![])+!![]] + ([][[]]+[])[![]+![]] + (![]+[])[(!![]<<!![])+!![]] + ([{}]+[])[(((!![]<<!![])+!![])<<(!![]+!![]))+!![]] + (![]*![]) + ([{}]+[])[(!![]<<!![])+!![]] + (![]+[])[(!![]<<!![])+!![]]
