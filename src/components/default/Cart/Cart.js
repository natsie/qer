import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { components as UI, styles as UIStyles } from "../../UI/UI";
import styles from "./Cart.module.css";

export default function Cart() {
  const {
    state: { cart },
  } = useGlobalContext();

  if (!cart.opened) return <></>;

  return (
    <UI.Card className={styles["cart"]}>
      <h1 className={`${styles["cart-heading"]} ${UIStyles["font-msr"]}`}>
        store
      </h1>
      <hr className={UIStyles["ui-card-sep"]} />
    </UI.Card>
  );
}
