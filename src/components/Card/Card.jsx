import { Link } from 'react-router-dom';
import ButtonSee from '../ButtonSee/ButtonSee';
import './Card.scss';
import Dropdown from '../Dropdown/Dropdown';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import { toggleNew } from '../../utils/toggleNew';
import InputNum from '../InputNum/InputNum';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartRedux';
import shortid from 'shortid';

const Card = ({ image, newp, name, description, price, features, includes, gallery, others, category, thumbnail }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const sumPrice = (price * count);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrement = (e) => {
    e.preventDefault();
    if(count >= 2) {
      setCount(count - 1);
    }
  };

  const addProduct = e => {
    e.preventDefault();
    const data = {
      id: shortid(),
      name: name,
      quantity: count,
      price: sumPrice,
      thumbnail
    };
    dispatch(addToCart(data));
    //dispatch(fetchAddToCart(data));  API
    //dispatch(fetchCart());  API
    console.log(data);
    setCount(1);
  };

  return (
    <div className='card__wrapper'>
      <Navbar />
      <Container>
        <Link to={'/' + category}>
        <p className='card__goback'>Go Back</p>
        </Link>
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
            <InputNum count={count} increment={increment} decrement={decrement}/>
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
                <Link to={'/' + category + '/' + other.slug}>
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
