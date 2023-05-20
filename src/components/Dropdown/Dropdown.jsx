import { Link } from 'react-router-dom';
import './Dropdown.scss';
import ButtonShop from '../ButtonShop/ButtonShop';

const Dropdown = () => {
  return (
    <div id='dropdown' >
      <ul className='dropdown__list'>
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
      </ul>
    </div>
  )
};

export default Dropdown;
