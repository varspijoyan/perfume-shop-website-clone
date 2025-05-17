import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import products from "./locales/products.json";
import questions from "./locales/questions.json";
import FAQPage from "./pages/FAQPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import { IProduct, IQuestion } from "./types";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainPage />
            </>
          }
        />
        <Route
          path="/shop"
          element={<ShopPage products={products as IProduct[]} />}
        />
        <Route
          path="/faq"
          element={<FAQPage faqs={questions as IQuestion[]} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
