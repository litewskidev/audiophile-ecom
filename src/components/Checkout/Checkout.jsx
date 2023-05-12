import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Checkout.scss';
import { getAllCart, removeAll } from '../../redux/cartRedux';
import ButtonSee from '../ButtonSee/ButtonSee';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const summary = useSelector(getAllCart);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [enumber, setEnumber] = useState('');
  const [epin, setEpin] = useState('');

  const order = {
    Name: name,
    Email: email,
    Phone: phone,
    Address: address,
    ZIP: zip,
    City: city,
    Country: country,
    eNumber: enumber,
    ePin: epin
  };

  const clearCart = () => {
    dispatch(removeAll(summary));
  };

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    const modal = document.querySelector('#confirm-modal');
    modal.classList.add('on');
  };

  const totalPrice = () => {
    let total = 0;
    summary.map(product => total += (product.price * product.quantity));
    return total;
  };

  const shipping = 50;
  const vat = (totalPrice() * 0.2).toFixed();
  const gTotal = totalPrice() + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(order);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setZip('');
    setCity('');
    setCountry('');
    setEnumber('');
    setEpin('');
    toggleModal();
    goToTop();
  };

  const handleBackToHome = () => {
    navigate('/');
    clearCart();
  };

  useEffect(() => {
    if (summary.length === 0) {
      navigate('/');
    }
  }, [navigate, summary.length]);

  return (
    <div>
      <Navbar />
      <div className='check__container'>
        <Container>
          <div onClick={() => navigate(-1)}>
            <p className='check__goback'>Go Back</p>
          </div>

          {/* FORM */}
          <form className='check__wrapper' onSubmit={handleSubmit}>
            <div className='check__checkout'>
              <p className='heading__h4'>checkout</p>
              <div className='checkout__wrapper'>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>BILLING DETAILS</p>
                  <div className='checkoutform__billing'>
                    <div className='checkoutform__input'>
                      <label htmlFor='name'>Name</label>
                      <input
                        onChange={e => setName(e.target.value)}
                        id='name'
                        type="text"
                        placeholder='Insert your name'
                        value={name}
                        pattern='[A-Za-z]+' />
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='email'>Email Adress</label>
                      <input
                        onChange={e => setEmail(e.target.value)}
                        id='email'
                        type="email"
                        placeholder='Insert your email address'
                        value={email} />
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='tel'>Phone Number</label>
                      <input
                        onChange={e => setPhone(e.target.value)}
                        id='tel'
                        type="tel"
                        placeholder='Insert your phone number'
                        value={phone} />
                    </div>
                  </div>
                </div>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>SHIPPING INFO</p>
                  <div className='checkoutform__shipping'>
                    <div className='checkoutform__input'>
                      <label htmlFor='address'>Your Address</label>
                      <input
                        onChange={e => setAddress(e.target.value)}
                        id='address'
                        type="text"
                        placeholder='Insert your address'
                        value={address} />
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='zip'>ZIP Code</label>
                      <input
                        onChange={e => setZip(e.target.value)}
                        id='zip'
                        type="number"
                        placeholder='Insert your ZIP code'
                        value={zip} />
                    </div>
                    <div className='checkoutform__input'>
                      <label  htmlFor='city'>City</label>
                      <input
                        onChange={e => setCity(e.target.value)}
                        id='city'
                        type="text"
                        placeholder='Insert your city'
                        value={city} />
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='country'>Country</label>
                      <input
                        onChange={e => setCountry(e.target.value)}
                        id='country'
                        type="text"
                        placeholder='Insert your country'
                        value={country} />
                    </div>
                  </div>
                </div>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>PAYMENT DETAILS</p>
                  <div className='checkoutform__payment'>
                    <div className='checkoutform__radio'>
                      <input className='radio__item' id='money' type="radio"/>
                      <label className='radio__label' htmlFor='money'>e-Money</label>
                    </div>
                    <div className='checkoutform__radio'>
                      <input className='radio__item' id='cash' type="radio" />
                      <label className='radio__label' htmlFor='cash'>Cash on Delivery</label>
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='e-number'>e-Money Number</label>
                      <input
                        onChange={e => setEnumber(e.target.value)}
                        id='e-number'
                        type="number"
                        placeholder='Insert your e-Money number'
                        value={enumber} />
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='e-pin'>e-Money PIN</label>
                      <input
                        onChange={e => setEpin(e.target.value)}
                        id='e-pin'
                        type="number"
                        placeholder='Insert your e-Money PIN'
                        value={epin} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='check__summary'>
              <p className='heading__h6'>summary</p>
              <div className='summary__items'>
                {summary.map(product =>
                <div key={product.cartId} className='summary__product'>
                  <div className='summary__product__left'>
                    <img src={process.env.PUBLIC_URL + product.thumbnail} alt=''></img>
                    <div className='summary__product__info'>
                      <p className='summary__symbol'>{product.symbol}</p>
                      <p className='summary__price'>$ {product.price}</p>
                    </div>
                  </div>
                  <p className='summary__price'>x{product.quantity}</p>
                </div>
                )}
              </div>
              <div className='summary__bottom'>
                <div className='summary__bottom__inner'>
                  <div className='summary__box'>
                    <p className='summary__left'>TOTAL</p>
                    <p className='summary__right'>$ {totalPrice()}</p>
                  </div>
                  <div className='summary__box'>
                    <p className='summary__left'>SHIPPING</p>
                    <p className='summary__right'>$ {shipping}</p>
                  </div>
                  <div className='summary__box'>
                    <p className='summary__left'>VAT (INCLUDED)</p>
                    <p className='summary__right'>$ {vat}</p>
                  </div>
                </div>
                <div className='summary__box'>
                  <p className='summary__left'>GRAND TOTAL</p>
                  <p className='summary__right__total'>$ {gTotal}</p>
                </div>
              </div>
                <ButtonSee className='orange'>continue & pay</ButtonSee>
            </div>
          </form>

          {/* CHECKOUT MODAL */}
          <div id='confirm-modal' className='checkout__modal'>
            <Container>
              <div className='checkout__modal__wrapper'>
                <img src={process.env.PUBLIC_URL + 'assets/checkout/icon-order-confirmation.svg'} alt=''></img>
                <div className='checkout__modal__text'>
                  <p>thank you<br />for your order</p>
                  <p>You will receive an email confirmation shortly.</p>
                </div>
                <div>
                  <div className='checkout__modal__products'>
                    <div>
                      {summary.slice(0,1).map(product =>
                        <div key={product.cartId} className='summary__product'>
                        <div className='summary__product__left'>
                          <img src={process.env.PUBLIC_URL + product.thumbnail} alt=''></img>
                          <div className='summary__product__info'>
                            <p className='summary__symbol'>{product.symbol}</p>
                            <p className='summary__price'>$ {product.price}</p>
                          </div>
                        </div>
                        <p className='summary__price'>x{product.quantity}</p>
                      </div>
                      )}
                    </div>
                    <div>
                      {(summary.length > 1) ? (
                        <div className='summary__others'>
                          <p>and {summary.length - 1} other item(s)</p>
                        </div>
                      ) : (<p></p>)}
                    </div>
                  </div>
                  <div className='checkout__modal__grand'>
                    <p>grand total</p>
                    <p>$ {totalPrice()}</p>
                  </div>
                </div>
                <div onClick={handleBackToHome}>
                  <ButtonSee className='orange checkout__modalBtn'>back to home</ButtonSee>
                </div>
              </div>
            </Container>
          </div>

        </Container>
      </div>
      <Footer />
    </div>
  )
};

export default Checkout;
