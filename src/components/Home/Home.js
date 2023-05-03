import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/productsRedux";

const Home = () => {
  const products = useSelector(getAllProducts);
  console.log(products);

  return (
    <div>
      <h1>Audiophile</h1>
      {( typeof products === 'undefined' ) ? (
        <p>Loading...</p>
        ) : (
          products.map((product, i) => (
            <p key={i}>{product.slug}</p>
          ))
        )}
    </div>
  )
};

export default Home;
