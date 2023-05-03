import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productsRedux";
import Home from "./components/Home/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <div>
      <Home />
    </div>
  )
};

export default App;
