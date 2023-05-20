import { useNavigate } from 'react-router-dom';
import './Dropdown.scss';
import ButtonShop from '../ButtonShop/ButtonShop';

const Dropdown = () => {
  const navigate = useNavigate();

  return (
    <div id='dropdown' >
      <ul className='dropdown__list'>
        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-headphones.png`} alt='headphones'></img>
            <p className='dropdown__text'>headphones</p>
            <div className='dropdown__link' onClick={() => navigate('/headphones')}><ButtonShop>shop</ButtonShop></div>
          </div>
        </li>

        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-speakers.png`} alt='speakers'></img>
            <p className='dropdown__text'>speakers</p>
            <div className='dropdown__link' onClick={() => navigate('/speakers')}><ButtonShop>shop</ButtonShop></div>
          </div>
        </li>

        <li>
          <div className='dropdown__box'>
            <img className='dropdown__img' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-earphones.png`} alt='earphones'></img>
            <p className='dropdown__text'>earphones</p>
            <div className='dropdown__link' onClick={() => navigate('/earphones')}><ButtonShop>shop</ButtonShop></div>
          </div>
        </li>
      </ul>
    </div>
  )
};

export default Dropdown;
