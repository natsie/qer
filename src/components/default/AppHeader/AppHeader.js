import UI from "../../UI/UI";
import styles from "./AppHeader.module.css";
import foodBg from "../../../assets/images/food.jpg";

function AppHeader() {
  return (
    <>
      <UI.Banner className={styles["nav-menu"]}>
        <h1>Qer</h1>
      </UI.Banner>
      <br id={styles["header-sep"]} />
      <img
        className={styles["header-background-image"]}
        alt="Header background showing different foods."
        src={foodBg}
      />
    </>
  );
}

export default AppHeader;
