import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import About from '../About/About.jsx';
import Footer from '../Footer/Footer.jsx';
import Container from '../Container/Container.jsx';
import InputNum from '../InputNum/InputNum.jsx';
import shortid from 'shortid';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleNew } from '../../utils/toggleNew.jsx';
import { addToCart } from '../../redux/cartRedux.js';
import './Card.scss';

const Card = ({ image, newp, name, description, price, features, includes, gallery, others, category, thumbnail, symbol, quantity, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if (count >= 2) {
    setCount(count - 1);
    }
  };

  const sumPrice = (price * quantity);

  const addProduct = e => {
    e.preventDefault();
    const data = {
      cartId: shortid(),
      id: id,
      name: name,
      quantity: count,
      price: sumPrice,
      symbol,
      thumbnail
    };
    dispatch(addToCart(data));
    //dispatch(fetchAddToCart(data));  API CART
    //dispatch(fetchCart());  API CART
    setCount(1);
  };

  return (
    <div className='card__wrapper'>
      <Container>
        <div onClick={() => navigate(-1)}>
          <p className='card__goback'>Go Back</p>
        </div>
        <div className='card__image'>
          <img src={process.env.PUBLIC_URL + image.desktop} alt='' />
        </div>
        <div className='card__info'>
          <div>
            {(toggleNew(newp) === true) ? (
              <p className='text__overline'>NEW PRODUCT</p>
            ) : (
              <p></p>
            )}
          </div>
          <h1 className='heading__h4'>{name}</h1>
          <p className='text__body'>{description}</p>
          <h2 className='heading__h5'>$ {price}</h2>
          <div className='card__orderbox'>
            <InputNum className='inputNum__card' count={count} increment={increment} decrement={decrement} />
            <div onClick={addProduct}>
              <ButtonSee className='orange'>add to cart</ButtonSee>
            </div>
          </div>
          <h2 className='heading__h5'>features</h2>
          <p className='text__body'>{features}</p>
        </div>
        <div className='card__inbox'>
          <h2 className='heading__h5'>in the box</h2>
          <div>
            {includes.map(item =>
              <div key={item.item} className='card__inbox__items'>
                <p className=''><span>{item.quantity}x</span></p>
                <p>{item.item}</p>
              </div>
            )}
          </div>
        </div>
        <div className='card__gallery'>
          <img src={process.env.PUBLIC_URL + gallery.first.desktop} alt='' />
          <img src={process.env.PUBLIC_URL + gallery.second.desktop} alt='' />
          <img src={process.env.PUBLIC_URL + gallery.third.desktop} alt='' />
        </div>
        <div className='card__others'>
          <h2 className='heading__h5'>you may also like</h2>
            {others.map(other =>
              <div key={other.name} className='card__others__items'>
                <img className='others__img' src={process.env.PUBLIC_URL + other.image.mobile} alt='' />
                <h2 className='heading__h5'>{other.name}</h2>
                <Link to={'/' + other.slug}>
                  <ButtonSee className='orange'>see product</ButtonSee>
                </Link>
              </div>
            )}
        </div>
        <Dropdown />
        <About />
      </Container>
      <Footer />
    </div>
  )
};

export default Card;
