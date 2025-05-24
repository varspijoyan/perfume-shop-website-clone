import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import blogs from "./locales/blogData.json";
import products from "./locales/products.json";
import questions from "./locales/questions.json";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import { IBlog, IProduct, IQuestion } from "./types";
import ContactUsPage from "./pages/ContactUsPage";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/shop"
          element={<ShopPage products={products as IProduct[]} />}
        />
        <Route
          path="/faq"
          element={<FAQPage faqs={questions as IQuestion[]} />}
        />
        <Route path="/blog" element={<BlogPage blogs={blogs as IBlog[]} />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />}/>
        <Route path="/wishlist" element={<WishlistPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
