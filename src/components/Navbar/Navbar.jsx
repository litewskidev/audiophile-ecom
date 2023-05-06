import { Link } from 'react-router-dom';
import './Navbar.scss';
import ButtonShop from '../ButtonShop/ButtonShop';

const Navbar = () => {

  const toggleMenu = () => {
    const dropdownMenu = document.querySelector('#dropdown')
    dropdownMenu.classList.toggle('open');
  }

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
        <div className='navbar__cart'>
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
            <Link className='dropdown__link' to='/headphones'><ButtonShop>shop</ButtonShop></Link>
          </div>
        </li>

        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-speakers.png`} alt='speakers'></img>
            <p className='dropdown__text'>speakers</p>
            <Link className='dropdown__link' to='/speakers'><ButtonShop>shop</ButtonShop></Link>
          </div>
        </li>

        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-earphones.png`} alt='earphones'></img>
            <p className='dropdown__text'>earphones</p>
            <Link className='dropdown__link' to='/earphones'><ButtonShop>shop</ButtonShop></Link>
          </div>
        </li>
      </div>
    </div>
  )
};

export default Navbar;
