import { useParams } from 'react-router-dom';
import './CardProduct.scss';
import { useSelector } from 'react-redux';
import { getProductById } from '../../redux/productsRedux';
import Card from '../Card/Card';

const CardProduct = () => {
  const params = useParams();
  const productId = params.id;
  const productData = useSelector(state => getProductById(state, productId));

  return (
    <div>
      {productData.map(product =>
        <Card key={product.id} {...product} />
      )}
    </div>
  )
};

export default CardProduct;
