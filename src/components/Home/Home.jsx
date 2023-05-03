import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux";
import './Home.scss';
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const products = useSelector(getAllProducts);
  console.log(products);

  return (
    <div>
      <Navbar />
    </div>
  )
};

export default Home;
