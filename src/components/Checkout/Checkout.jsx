import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllCart, removeAll } from '../../redux/cartRedux.js';
import { fetchSendOrder } from '../../redux/ordersRedux.js';
import { totalItems } from '../../utils/totalItems.js';
import { totalPrice } from '../../utils/totalPrice.js';
import { goToTop } from '../../utils/goToTop.js';
import { motion } from "framer-motion";
import shortid from 'shortid';
import Container from '../Container/Container.jsx';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import Footer from '../Footer/Footer.jsx';
import './Checkout.scss';

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
  const [payment, setPayment] = useState('');
  const [enumber, setEnumber] = useState('');
  const [epin, setEpin] = useState('');
  const [orderId] = useState(shortid());

  const [shopList, setShopList] = useState(0);

  const toggleModal = () => {
    const modal = document.querySelector('#confirm-modal');
    modal.classList.add('on');
  };

  const clearCart = () => {
    dispatch(removeAll(summary));
  };

  const closeCart = () => {
    const cartModal = document.querySelector('#cart');
    cartModal.classList.remove('open');
  };

  const orderedProducts = () => {
    const products = [];
    summary.map(product => products.push({Item: product.name, Qty: product.quantity}))
    return products;
  };

  const shipping = 50;
  const vat = (totalPrice(summary) * 0.2).toFixed();
  const gTotal = totalPrice(summary) + shipping;
  const order = {
    ID: orderId,
    Name: name,
    Email: email,
    Phone: phone,
    Address: address,
    ZIP: zip,
    City: city,
    Country: country,
    Payment: payment,
    eNumber: enumber,
    ePin: epin,
    Products: orderedProducts()
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchSendOrder(order));
    toggleModal();
    goToTop();
    console.log(order);
  };

  const handleBackToHome = (e) => {
    e.preventDefault()
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setZip('');
    setCity('');
    setCountry('');
    setEnumber('');
    setEpin('');
    clearCart();
  };

  useEffect(() => {
    if (summary.length === 0) {
      navigate('/');
      closeCart();
    }
  }, [navigate, summary.length]);

  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.2, duration: 1, ease: [0, 0.9, 0.9, 1] }
    }}
    >
    <div>
      <div className='check__container'>
        <Container>
          <div className='check__goback__box'>
            <p onClick={() => navigate(-1)} className='check__goback'>Go Back</p>
          </div>
          {/* FORM */}
          <form className='check__wrapper' onSubmit={handleSubmit}>
            <div className='check__checkout'>
              <p className='heading__h4'>checkout</p>
              <div className='checkout__wrapper'>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>BILLING DETAILS</p>
                  <div className='checkoutform__billing'>
                    <div className='checkout__layout'>
                      <div className='checkoutform__input'>
                        <label htmlFor='name'>Name</label>
                        <input
                          onChange={e => setName(e.target.value)}
                          id='name'
                          type="text"
                          placeholder='Alexei Ward'
                          value={name}
                          pattern='[A-Za-z\s]+'
                           />
                      </div>
                      <div className='checkoutform__input'>
                        <label htmlFor='email'>Email Adress</label>
                        <input
                          onChange={e => setEmail(e.target.value)}
                          id='email'
                          type="email"
                          placeholder='alexei@mail.com'
                          value={email}
                           />
                      </div>
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='tel'>Phone Number</label>
                      <input
                        onChange={e => setPhone(e.target.value)}
                        id='tel'
                        type="tel"
                        placeholder='202555013'
                        value={phone}
                        pattern='[0-9]{9}'
                         />
                    </div>
                  </div>
                </div>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>SHIPPING INFO</p>
                  <div className='checkoutform__shipping'>
                    <div id='address__input' className='checkoutform__input'>
                      <label htmlFor='address'>Address</label>
                      <input
                        onChange={e => setAddress(e.target.value)}
                        id='address'
                        type="text"
                        placeholder='1137 Williams Avenue'
                        value={address}
                        pattern='[A-Za-z0-9/\s]+'
                         />
                    </div>
                    <div className='checkout__layout'>
                      <div className='checkoutform__input'>
                        <label htmlFor='zip'>ZIP Code</label>
                        <input
                          onChange={e => setZip(e.target.value)}
                          id='zip'
                          type="tel"
                          placeholder='10001'
                          value={zip}
                          pattern='[0-9]{5}'
                           />
                      </div>
                      <div className='checkoutform__input'>
                        <label htmlFor='city'>City</label>
                        <input
                          onChange={e => setCity(e.target.value)}
                          id='city'
                          type="text"
                          placeholder='New York'
                          value={city}
                          pattern='[A-Za-z\s]+'
                           />
                      </div>
                    </div>
                    <div className='checkoutform__input'>
                      <label htmlFor='country'>Country</label>
                      <input
                        onChange={e => setCountry(e.target.value)}
                        id='country'
                        type="text"
                        placeholder='United States'
                        value={country}
                        pattern='[A-Za-z\s]+'
                         />
                    </div>
                  </div>
                </div>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>PAYMENT DETAILS</p>
                  <div className='checkoutform__payment'>
                    <div className='checkoutform__payment__method'>
                      <label>Payment Method</label>
                      <div className='checkoutform__radio__box'>
                        <div className='checkoutform__radio'>
                          <input className='radio__item'
                            id='money' name='radio'
                            type="radio"
                            value="e-Money"
                            onChange={e => setPayment(e.target.value)}
                            defaultChecked />
                          <label className='radio__label' htmlFor='money'>e-Money</label>
                        </div>
                        <div className='checkoutform__radio'>
                          <input className='radio__item'
                            id='cash' name='radio'
                            type="radio"
                            value="Cash on Delivery"
                            onChange={e => setPayment(e.target.value)} />
                          <label className='radio__label' htmlFor='cash'>Cash on Delivery</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      {(payment === 'Cash on Delivery') ? (
                        <div className='checkoutform__cash__on'>
                          <img src={process.env.PUBLIC_URL + './assets/checkout/icon-cash-on-delivery.svg'} alt='cash on delivery icon'/>
                          <p className='text__body'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                        </div>
                      ) : (
                        <div className='checkoutform__emoney'>
                          <div className='checkoutform__input'>
                            <label htmlFor='e-number'>e-Money Number</label>
                            <input
                              onChange={e => setEnumber(e.target.value)}
                              id='e-number'
                              type="tel"
                              placeholder='238521993'
                              value={enumber}
                              pattern='[0-9]{9}'
                               />
                          </div>
                          <div className='checkoutform__input'>
                            <label htmlFor='e-pin'>e-Money PIN</label>
                            <input
                              onChange={e => setEpin(e.target.value)}
                              id='e-pin'
                              type="tel"
                              placeholder='1001'
                              value={epin}
                              pattern='[0-9]{4}'
                               />
                          </div>
                        </div>
                      )}
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
                    <img src={process.env.PUBLIC_URL + product.thumbnail} alt='product thumbnail'></img>
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
                    <p className='summary__right'>$ {totalPrice(summary)}</p>
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
                <img src={process.env.PUBLIC_URL + 'assets/checkout/icon-order-confirmation.svg'} alt='confirmation sign'></img>
                <div className='checkout__modal__text'>
                  <p>thank you<br />for your order<br />ID: <span>{order.ID}</span></p>
                  <p>You will receive an email confirmation shortly.</p>
                </div>
                <div className='checkout__modal__box'>
                  {(shopList === 0) ? (
                    <div className='checkout__modal__products'>
                      <div>
                        {summary.slice(0,1).map(product =>
                          <div key={product.cartId} className='summary__product'>
                          <div className='summary__product__left__modal'>
                            <img src={process.env.PUBLIC_URL + product.thumbnail} alt='product thumbnail'></img>
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
                            <p onClick={() => setShopList(1)}>and {totalItems(summary) - summary[0].quantity} other item(s)</p>
                          </div>
                        ) : (<p></p>)}
                      </div>
                    </div>
                  ) : (
                    <div className='checkout__modal__products'>
                      <div>
                        {summary.map(product =>
                          <div key={product.cartId} className='summary__product'>
                          <div className='summary__product__left__modal'>
                            <img src={process.env.PUBLIC_URL + product.thumbnail} alt='product thumbnail'></img>
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
                            <p onClick={() => setShopList(0)}>View less</p>
                          </div>
                        ) : (<p></p>)}
                      </div>
                    </div>
                  )}
                  <div className='checkout__modal__grand'>
                    <p>grand total</p>
                    <p>$ {gTotal}</p>
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
    </motion.div>
  )
};

export default Checkout;
