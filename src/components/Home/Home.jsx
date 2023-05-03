import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux";
import './Home.scss';

const Home = () => {
  const products = useSelector(getAllProducts);
  console.log(products);

  return (
    <div>
      <h1 className="heading__h1">audiophile</h1>
      {( typeof products === 'undefined' ) ? (
        <p>Loading...</p>
        ) : (
          products.map((product, i) => (
            <img key={i} src={process.env.PUBLIC_URL + product.image.mobile} alt=""/>
          ))
        )}
    </div>
  )
};

export default Home;
