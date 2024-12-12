import UI from "../../UI/UI";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
  return (
    <UI.Banner className={styles["app-footer"]}>
      <center>
        <p>
          Made with <span className={styles["heart-emoji"]}>💖</span> by{" "}
          <a href="https://github.com/natsie" target="_blank">
            natsie
          </a>
        </p>
        <p>
          <span style={{ font: "normal bold 1.25rem monospace" }}>qer</span> &copy; {new Date().getFullYear()}{" "}
          Oghenevwegba Obire
        </p>
      </center>
    </UI.Banner>
  );
}
