import './CartProduct.scss';
import InputNum from '../InputNum/InputNum';

const CartProduct = ({ price, quantity, thumbnail, symbol }) => {

  /*  REMOVE ITEM
  const removeBtn = () => {
    dispatch(removeFromCart(id));
  };
  */

  return (
    <div className='cartproduct__wrapper'>
      <div className='cart__product__data'>
        <img src={process.env.PUBLIC_URL + thumbnail} alt=''/>
        <div className='cartproduct__info'>
          <p className='cartproduct__symbol'>{symbol}</p>
          <p className='cartproduct__price'>$ {price}</p>
        </div>
      </div>
      <div className='cart__product__input'>
        <InputNum className='inputNum__cart' count={quantity} />
      </div>
    </div>
  )
};

export default CartProduct;
