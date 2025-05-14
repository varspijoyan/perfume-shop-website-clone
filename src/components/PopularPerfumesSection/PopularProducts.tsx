import React from "react";
import styles from "../../styles/PopularProducts.module.css";
import { IProduct } from "../../types";
import ProductCart from "./ProductCart";

interface IPopularProducts {
  products: IProduct[];
}

const PopularProducts: React.FC<IPopularProducts> = ({ products }) => {
  return (
    <section className={styles.popularProductsSection}>
      <div className={styles.container}>
        <div className={styles.titleContent}>
          <h1 className={styles.highlightedTitle}>Best Sellers</h1>
          <h1 className={styles.title}>Popular Perfumes</h1>
        </div>
        <div className={styles.arrows}>
          <div className={styles.arrow1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
          </div>
          <div className={styles.arrow2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="black"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
          </div>
        </div>
        <div className={styles.popularProductsContent}>
          {products.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
