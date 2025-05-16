import React from "react";
import AboutUsSection from "../components/AboutUsSection/AboutUsSection";
import CategorySection from "../components/CategorySection/CategorySection";
import CustomersFeedbacksSection from "../components/CustomersFeebacksSection/CustomersFeedbackSection";
import MainSection from "../components/MainSection/MainSection";
import PopularProducts from "../components/PopularPerfumesSection/PopularProducts";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import customerFeedbacks from "../locales/customersFeedbacks.json";
import products from "../locales/products.json";
import { IFeedback, IProduct } from "../types";

const MainPage: React.FC = () => {
  return (
    <>
      <MainSection />
      <AboutUsSection />
      <PopularProducts products={products as IProduct[]} />
      <CategorySection />
      <ProductsSection products={products as IProduct[]} />
      <CustomersFeedbacksSection
        customerFeedbacks={customerFeedbacks as IFeedback[]}
      />
    </>
  );
};

export default MainPage;
