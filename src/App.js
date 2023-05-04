import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsRedux";
import Home from "./components/Home/Home.jsx";
import HeadphonesList from "./components/HeadphonesList/HeadphonesList.jsx";
import SpeakersList from "./components/SpeakersList/SpeakerList.jsx";
import EarphonesList from "./components/EarphonesList/EarphonesList.jsx";
import Card from "./components/CardProduct/CardProduct.jsx";
import E404 from "./components/E404/E404.jsx";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadphonesList />} />
        <Route path="/speakers" element={<SpeakersList />} />
        <Route path="/earphones" element={<EarphonesList />} />
        <Route path="/product/:id" element={<Card />} />
        <Route path='*' element={<E404 />} />
      </Routes>
    </main>
  )
};

export default App;
