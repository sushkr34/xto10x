import style from "./index.module.css";

const Card = (props) => {
  const { id, product } = props;
  return (
    <div key={id}>
      <img
        className={`${style.image}`}
        src={`${product && product.searchImage}`}
        alt={`${product.product}`}
      />
      <p className={`${style.brand}`}>{`${product && product.brand}`}</p>
      <p className={`${style.additionalInfo}`}>
        {product && product.additionalInfo}
      </p>
      <p>Rs.1249 </p>
    </div>
  );
};

export default Card;
