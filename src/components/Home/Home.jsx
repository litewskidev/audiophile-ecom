import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux";
import './Home.scss';
import Container from '../Container/Container.jsx';
import HomeHero from "../HomeHero/HomeHero";
import Footer from "../Footer/Footer";
import Dropdown from "../Dropdown/Dropdown";
import About from "../About/About";
import HomeOthers from "../HomeOthers/HomeOthers";

const Home = () => {
  const products = useSelector(getAllProducts);
  console.log(products);

  return (
    <div className="home__wrapper">
      <HomeHero {...products[3]} />
      <Container>
        <Dropdown />
        <HomeOthers {...products}/>
        <About />
      </Container>
      <Footer />
    </div>
  )
};

export default Home;
