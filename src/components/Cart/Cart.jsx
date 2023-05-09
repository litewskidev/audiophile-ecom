import { useDispatch, useSelector } from 'react-redux';
import ButtonSee from '../ButtonSee/ButtonSee';
import './Cart.scss';
import { getAllCart, removeAll } from '../../redux/cartRedux.js';
import CartProduct from '../CartProduct/CartProduct.jsx';

const Cart = () => {
  const dispatch = useDispatch();

  let cart = useSelector(getAllCart);

  const totalPrice = () => {
    let total = 0;
    cart.map(product => total += product.price);
    return total;
  };

  const clearCart = () => {
    dispatch(removeAll(cart));
  };

  return (
    <div className='cart__wrapper'>
      <div className='cart__header'>
        <p className='heading__h6'>cart({cart.length})</p>
        <p className='text__body' onClick={clearCart}>Remove all</p>
      </div>
      <div className='cart__products'>
        {cart.map(item => <CartProduct key={item.id} {...item} />)}
      </div>
      <div className='cart__bottom'>
        <div className='cart__summary'>
          <p className='cart__total'>TOTAL</p>
          <p className='cart__price'>$ {totalPrice()}</p>
        </div>
        <ButtonSee className='orange'>checkout</ButtonSee>
      </div>
    </div>
  )
};

export default Cart;
