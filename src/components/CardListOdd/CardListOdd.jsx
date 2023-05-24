import { useNavigate } from 'react-router-dom';
import { toggleNew } from '../../utils/toggleNew';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import './CardListOdd.scss';

const CardListOdd = ({ categoryImage, name, description, newp, slug }) => {
  const navigate = useNavigate();

  return (
    <div className='cardlist__odd'>
      <div className='cardlist__wrapper__odd'>
        <div className='cardlist__box__odd'>
          <div>
            {(toggleNew(newp) === true) ? (
              <p className='text__overline cardlist__overline__odd'>NEW PRODUCT</p>
            ) : (
              <p></p>
            )}
          </div>
          <h1 className='heading__h4'>{name}</h1>
          <p className='text__body cardlist__description__odd'>{description}</p>
          <div className='cardlist__btn__box__odd'>
            <div className='cardlist__btn__odd' onClick={() => navigate('/' + slug)}>
              <ButtonSee className='orange'>see product</ButtonSee>
            </div>
          </div>
        </div>
        <picture>
          <source media='(max-width: 540px)' srcSet={process.env.PUBLIC_URL + categoryImage.mobile} />
          <source media='(max-width: 1023.98px)' srcSet={process.env.PUBLIC_URL + categoryImage.tablet}/>
          <img src={process.env.PUBLIC_URL + categoryImage.desktop} alt='products' />
        </picture>
      </div>
    </div>
  )
};

export default CardListOdd;
