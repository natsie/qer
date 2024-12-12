import styles from "../UI.module.css";
export default function Card(props) {
  return <div className={`${styles["ui-card"]} ${props.className || ""}`.trim()}>{props.children}</div>;
}
