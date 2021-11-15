import Card from "../../../ui-components/cards";
import styles from "./index.module.css";

const ItemsSection = (props) => {
  const { loading, itemList } = props;
  return (
    <div>
      {loading && <p>Products Loading ...</p>}
      {!loading && (
        <div className={`${styles.card_container}`}>
          {itemList && itemList.length > 0 ? (
            itemList.map((el, idx) => {
              return (
                <div style={{ gridColumn: 1 / 5 }}>
                  <Card id={idx} product={el} />
                </div>
              );
            })
          ) : (
            <p> No Items Found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemsSection;
