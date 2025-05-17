import React from "react";
import { IProduct } from "../../types";

interface IProductSectionStyle {
  readonly [key: string]: string;
}

interface IProductProps {
  product: IProduct;
  styles: IProductSectionStyle;
}

const Product: React.FC<IProductProps> = ({ product, styles }) => {
  const imageUrl = require(`../../assets/${product.image}`);
  return (
    <div className={styles.product} key={product.id}>
      <img src={imageUrl} alt="product image" />
      <div className={styles.text}>
        <h1 className={styles.productTitle}>
          {product.titlePart.titlePart1} {product.titlePart.titlePart2}
        </h1>
        <p className={styles.price}>${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
