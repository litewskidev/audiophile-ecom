import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty } from '../../redux/cartRedux.js';
import InputNum from '../InputNum/InputNum.jsx';
import './CartProduct.scss';

const CartProduct = ({ price, quantity, thumbnail, symbol, cartId }) => {
  const dispatch = useDispatch();
  const data = {cartId};

  const increment = (e) => {
    e.preventDefault();
    dispatch(incrementQty(data));
  };

  const decrement = (e) => {
    e.preventDefault();
    if (quantity >= 2) {
    dispatch(decrementQty(data));
    }
  };

  /*  REMOVE ITEM
  const removeBtn = () => {
    dispatch(removeFromCart(id));
  };
  */

  return (
    <div className='cartproduct__wrapper'>
      <div className='cart__product__data'>
        <img src={process.env.PUBLIC_URL + thumbnail} alt='product thumbnail'/>
        <div className='cartproduct__info'>
          <p className='cartproduct__symbol'>{symbol}</p>
          <p className='cartproduct__price'>$ {price}</p>
        </div>
      </div>
      <div className='cart__product__input'>
        <InputNum className='inputNum__cart' count={quantity} increment={increment} decrement={decrement} />
      </div>
    </div>
  )
};

export default CartProduct;
