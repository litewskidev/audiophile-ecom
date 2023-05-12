import './Cart.scss';
import ButtonSee from '../ButtonSee/ButtonSee';
import CartProduct from '../CartProduct/CartProduct.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCart, removeAll } from '../../redux/cartRedux.js';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getAllCart);

  const totalPrice = () => {
    let total = 0;
    cart.map(product => total += (product.price * product.quantity));
    return total;
  };

  const totalItems = () => {
    let totalCart = 0;
    cart.map(item => totalCart += (item.quantity));
    return totalCart;
  };

  const clearCart = () => {
    dispatch(removeAll(cart));
  };

  const checkout = () => {
    if (cart.length > 0) {
      navigate('/checkout');
    }
  };

  return (
    <div className='cart__wrapper'>
      <div className='cart__header'>
        <p className='heading__h6'>cart({totalItems()})</p>
        <p className='text__body' onClick={clearCart}>Remove all</p>
      </div>
      <div className='cart__products'>
        {(cart.length === 0) ? (
          <div className='text__body cart__empty'>
            <img src={process.env.PUBLIC_URL + 'assets/cart/HighGradeHeadset.svg'} alt=''/>
            <p>Your cart is empty</p>
          </div>
        ) : (
        cart.map(item => <CartProduct key={item.cartId} {...item} />)
        )}
      </div>
      <div className='cart__bottom'>
        <div className='cart__summary'>
          <p className='cart__total'>TOTAL</p>
          <p className='cart__price'>$ {totalPrice()}</p>
        </div>

        <div onClick={checkout}>
          <ButtonSee className='cart__btn orange'>checkout</ButtonSee>
        </div>
      </div>
    </div>
  )
};

export default Cart;
