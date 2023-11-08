import { useParams } from 'react-router-dom';
import './CardProduct.scss';
import { useSelector } from 'react-redux';
import { getProductById } from '../../redux/productsRedux';
import { motion } from "framer-motion";
import Card from '../Card/Card';

const CardProduct = () => {
  const params = useParams();
  const productId = params.id;
  const productData = useSelector(state => getProductById(state, productId));

  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.2, duration: 1, ease: [0, 0.9, 0.9, 1] }
    }}
    >
    <div>
      {productData.map(product =>
        <Card key={product.id} {...product} />
      )}
    </div>
    </motion.div>
  )
};

export default CardProduct;
