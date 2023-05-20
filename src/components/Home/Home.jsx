import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux.js";
import Container from '../Container/Container.jsx';
import HomeHero from "../HomeHero/HomeHero.jsx";
import Footer from "../Footer/Footer.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import About from "../About/About.jsx";
import HomeOthers from "../HomeOthers/HomeOthers.jsx";
import './Home.scss';

const Home = () => {
  const products = useSelector(getAllProducts);
  
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
