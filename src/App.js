import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsRedux";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
};

export default App;
