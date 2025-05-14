import React from "react";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import MainSection from "../components/MainSection/MainSection";
import PopularProducts from "../components/PopularPerfumesSection/PopularProducts";
import products from "../locales/products.json";
import { IProduct } from "../types";

const MainPage: React.FC = () => {
  return (
    <>
      <MainSection />
      <AboutUsSection />
      <PopularProducts products={products as IProduct[]} />
    </>
  );
};

export default MainPage;
