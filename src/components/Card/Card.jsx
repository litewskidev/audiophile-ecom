import { Link } from 'react-router-dom';
import ButtonSee from '../ButtonSee/ButtonSee';
import './Card.scss';
import Dropdown from '../Dropdown/Dropdown';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';
import { toggleNew } from '../../utils/toggleNew';

const Card = ({ image, newp, name, description, price, features, includes, gallery, others, category}) => {
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
          <h2 className='heading__h6'>$ {price}</h2>
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
