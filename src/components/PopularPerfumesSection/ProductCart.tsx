
import React from "react";
import styles from "../../styles/PopularProducts.module.css";
import { IProduct } from "../../types";

interface IProductCartProps {
  product: IProduct;
}

const ProductCart: React.FC<IProductCartProps> = ({ product }) => {
  const imageUrl = require(`../../assets/${product.image}`);  
  return (
    <div className={styles.productContent}>
      <div className={styles.productTextContainer}>
        <h1 className={styles.productTitle}>
          {product.titlePart.titlePart1}{" "}
          <span className={styles.highlight}>{product.titlePart.titlePart2}</span>
        </h1>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.shopContent}>
          <div className={styles.price}>
            <span>PRICE</span>
            <span>${product.price}</span>
          </div>
          <button className={styles.btn}>SHOP NOW</button>
        </div>
      </div>
      <div className={styles.productImageContainer}>
        <img src={imageUrl} alt="image" />
      </div>
    </div>
  );
};

export default ProductCart;
