import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import './Checkout.scss';
import { getAllCart } from '../../redux/cartRedux';
import ButtonSee from '../ButtonSee/ButtonSee';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const summary = useSelector(getAllCart);
  console.log(summary);

  const totalPrice = () => {
    let total = 0;
    summary.map(product => total += (product.price * product.quantity));
    return total;
  };

  const shipping = 50;
  const vat = (totalPrice() * 0.2).toFixed();
  const gTotal = totalPrice() + shipping;

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
          <div className='check__wrapper'>
            <div className='check__checkout'>
              <p className='heading__h4'>checkout</p>
              <div className='checkout__wrapper'>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>BILLING DETAILS</p>
                  <p> ... </p>
                </div>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>SHIPPING INFO</p>
                  <p> ... </p>
                </div>
                <div className='checkout__box'>
                  <p className='checkout__box__desc'>PAYMENT DETAILS</p>
                  <p> ... </p>
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
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
};

export default Checkout;
