import styles from "../UI.module.css";
export default function Banner(props) {
  return <div className={`${styles["ui-banner"]} ${props.className}`.trim()}>{props.children}</div>;
}
