import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsRedux.js";
import Home from "./components/Home/Home.jsx";
import HeadphonesList from "./components/HeadphonesList/HeadphonesList.jsx";
import SpeakersList from "./components/SpeakersList/SpeakerList.jsx";
import EarphonesList from "./components/EarphonesList/EarphonesList.jsx";
import ProductCard from "./components/CardProduct/CardProduct.jsx";
import E404 from "./components/E404/E404.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  /*  API
  useEffect(() => dispatch(fetchCart()), [dispatch]);
  */

  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadphonesList />} />
        <Route path="/speakers" element={<SpeakersList />} />
        <Route path="/earphones" element={<EarphonesList />} />
        <Route path="/:id" element={<ProductCard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </main>
  )
};

export default App;
