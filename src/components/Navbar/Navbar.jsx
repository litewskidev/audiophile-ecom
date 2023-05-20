import { Link } from 'react-router-dom';
import './Navbar.scss';
import ButtonShop from '../ButtonShop/ButtonShop';
import Cart from '../Cart/Cart';

const Navbar = () => {

  const toggleMenu = () => {
    const dropdownMenu = document.querySelector('#dropdown');
    dropdownMenu.classList.toggle('open');
  };

  const toggleCart = () => {
    const cartModal = document.querySelector('#cart');
    cartModal.classList.toggle('open');
  };

  const closeMenu = () => {
    const dropdownMenu = document.querySelector('#dropdown');
    dropdownMenu.classList.remove('open');
  };

  return (
    <div className='navbar'>
      <div className='navbar__wrapper'>
        <div className='dropdown__toggle__btn' onClick={toggleMenu}>
          <img src={`${process.env.PUBLIC_URL}/assets/shared/tablet/icon-hamburger.svg`} alt='icon' />
        </div>
        <Link to='/'>
        <div className='navbar__logo'>
          <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`} alt='logo' />
        </div>
        </Link>
        <ul className='navbar__links'>
          <li>
            <Link to='/'>
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link to='/headphones'>
              <p>HEADPHONES</p>
            </Link>
          </li>
          <li>
            <Link to='/speakers'>
              <p>SPEAKERS</p>
            </Link>
          </li>
          <li>
            <Link to='/earphones'>
              <p>EARPHONES</p>
            </Link>
          </li>
        </ul>
          <div className='navbar__cart__btn' onClick={toggleCart}>
            <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-cart.svg`} alt='hamburger icon' />
          </div>
      </div>
      <div className='pattern'></div>

      {/* DROPDOWN */}
      <div id='dropdown' className='navbar__dropdown'>
        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-headphones.png`} alt='headphones'></img>
            <p className='dropdown__text'>headphones</p>
            <Link className='dropdown__link' to='/headphones' onClick={closeMenu}><ButtonShop>shop</ButtonShop></Link>
          </div>
        </li>

        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-speakers.png`} alt='speakers'></img>
            <p className='dropdown__text'>speakers</p>
            <Link className='dropdown__link' to='/speakers' onClick={closeMenu}><ButtonShop>shop</ButtonShop></Link>
          </div>
        </li>

        <li>
          <div className='dropdown__box bottom__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-earphones.png`} alt='earphones'></img>
            <p className='dropdown__text'>earphones</p>
            <Link className='dropdown__link' to='/earphones' onClick={closeMenu}><ButtonShop>shop</ButtonShop></Link>
          </div>
        </li>

        <li>
          <div className='dropdown__pattern'></div>
        </li>
      </div>

      {/* CART */}
      <div id='cart' className='navbar__cart'>
        <div className='cart__container'>
          <Cart />
        </div>
      </div>
    </div>
  )
};

export default Navbar;
