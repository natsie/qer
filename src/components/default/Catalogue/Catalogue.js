import { components as UI, styles as UIStyles } from "../../UI/UI";
import styles from "./Catalogue.module.css";
import catalogue from "../../../catalogue.js";

function CatalogueItem(props) {
  return (
    <div className={styles["catalogue-item"]}>
      <img alt="" src={props.item.images[0]} />
      <div>
        <p className={styles["catalogue-item-text"]}>{props.item.name}</p>
        <div className={UIStyles["popup-details"]} style={{ "--hover-detail": `"${props.item.description}"` }}>
          <p className={styles["catalogue-item-text"]}>{props.item.description}</p>
        </div>
      </div>
      <div>
        <center>
          <p catalogue-price="true" className={styles["catalogue-item-text"]}>
            {props.item.price}
          </p>
          <div className={styles["catalogue-item-action-container"]}>
            <p
              className={`${UIStyles["font-msr"]} ${UIStyles["popup-details"]}`}
              style={{ "--hover-detail": "'save for later'" }}>
              download
            </p>
            <p
              className={`${UIStyles["font-msr"]} ${UIStyles["popup-details"]}`}
              style={{ "--hover-detail": "'add to cart'" }}>
              store
            </p>
          </div>
        </center>
      </div>
    </div>
  );
}
export default function Catalogue() {
  const itemSep = <hr className={UIStyles["ui-card-sep"]} />;
  return (
    <UI.Card className={styles["catalogue"]}>
      <p>
        <a href="https://google.com/" target="_blank">
          Link to Google
        </a>
      </p>
      <p>
        <a href={document.location.href} target="_blank">
          Link to self
        </a>
      </p>
      <h2>
        Browse our{" "}
        <span className={UIStyles["popup-details"]} style={{ "--hover-detail": "'*in our opinion...'" }}>
          delightful*
        </span>{" "}
        catalogue
      </h2>
      {itemSep}
      {catalogue.items.map((i) => (
        <>
          <CatalogueItem key={i.id} item={i} />
          {itemSep}
        </>
      ))}
    </UI.Card>
  );
}
