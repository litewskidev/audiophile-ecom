import './CartProduct.scss';
import InputNum from '../InputNum/InputNum';

const CartProduct = ({ id, name, price, quantity, thumbnail }) => {

  /*  REMOVE ITEM
  const removeBtn = () => {
    dispatch(removeFromCart(id));
  };
  */

  return (
    <div className='cartproduct__wrapper'>
      <img src={process.env.PUBLIC_URL + thumbnail} alt=''/>
      <div className='cartproduct__info'>
        <div>{name}</div>
        <div>$ {price}</div>
      </div>
      <InputNum count={quantity} />

    </div>
  )
};

export default CartProduct;
