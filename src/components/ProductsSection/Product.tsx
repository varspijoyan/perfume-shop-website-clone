import React from "react";
import { IProduct, IStyle } from "../../types";

interface IProductProps {
  product: IProduct;
  styles: IStyle;
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
      <div className={styles.hoverOnProduct}>
        <div className={styles.hover}>
          <div className={styles.wishlistIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              style={{ cursor: "pointer" }}
              fill="white"
            >
              <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
            </svg>
          </div>
        </div>
        <div className={styles.hover}>
          <div className={styles.cartIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="white"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
