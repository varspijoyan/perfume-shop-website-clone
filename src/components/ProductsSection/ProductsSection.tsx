import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/ProductsSection.module.css";
import { IProduct } from "../../types";
import Product from "./Product";

interface IProductsSectionProps {
  products: IProduct[];
}

const ProductsSection: React.FC<IProductsSectionProps> = ({ products }) => {
  const navigateTo = useNavigate();
  const filteredProducts = useMemo(() => {
    const first6Ids = [1, 2, 3, 4, 5, 6];
    return products.filter((product) => first6Ids.includes(product.id));
  }, [products]);

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.highlightTitle}>Products</h1>
          <h1 className={styles.title}>New Perfumes</h1>
        </div>
        <div className={styles.products}>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} styles={styles} />
          ))}
          <button className={styles.btn} onClick={() => navigateTo("/shop")}>
            DISCOVER MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
