import Card from "./Card/Card";
import Banner from "./Banner/Banner";
import styles from "./UI.module.css";
import font_msr from "../../assets/fonts/Material-Symbols-Rounded.woff2";

fetch(font_msr)
  .then(async (res) => {
    const msrf = new FontFace("material-symbols-rounded", await res.arrayBuffer());
    await msrf.load();
    document.fonts.add(msrf);
  })
  .catch(console.log);
export const components = {
  Card,
  Banner,
};
export { components as default, styles };
