import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import products from "./locales/products.json";
import { IProduct } from "./types";

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
        <Route path="/shop" element={<ShopPage products={products as IProduct[]} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
