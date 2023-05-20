import { useNavigate } from 'react-router-dom';
import { toggleNew } from '../../utils/toggleNew';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import './CardList.scss';

const CardList = ({ categoryImage, name, description, newp, slug }) => {
  const navigate = useNavigate();

  return (
    <div className='cardlist'>
      <div className='cardlist__wrapper'>
        <img src={process.env.PUBLIC_URL + categoryImage.desktop} alt='products' />
        <div>
          {(toggleNew(newp) === true) ? (
            <p className='text__overline'>NEW PRODUCT</p>
          ) : (
            <p></p>
          )}
        </div>
        <h1 className='heading__h4'>{name}</h1>
        <p className='text__body'>{description}</p>
      </div>
      <div onClick={() => navigate('/' + slug)}>
        <ButtonSee className='orange'>see product</ButtonSee>
      </div>
    </div>
  )
};

export default CardList;
