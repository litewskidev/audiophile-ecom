import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux.js";
import { loadingSpinner } from "../../utils/loadingSpinner/loadingSpinner.js";
import { motion } from "framer-motion";
import Container from '../Container/Container.jsx';
import HomeHero from "../HomeHero/HomeHero.jsx";
import Footer from "../Footer/Footer.jsx";
import Dropdown from "../Dropdown/Dropdown.jsx";
import About from "../About/About.jsx";
import HomeOthers from "../HomeOthers/HomeOthers.jsx";
import './Home.scss';

const Home = () => {
  const products = useSelector(getAllProducts);

  if(!products) {
    return loadingSpinner();
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.2, duration: 1, ease: [0, 0.9, 0.9, 1] }
    }}
    >
    <div className="home__wrapper">
      <HomeHero {...products[3]} />
      <Container>
        <Dropdown />
        <HomeOthers {...products}/>
        <About />
      </Container>
      <Footer />
    </div>
    </motion.div>
  )
};

export default Home;
