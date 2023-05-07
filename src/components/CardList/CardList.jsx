import './CardList.scss';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import { Link } from 'react-router-dom';
import { toggleNew } from '../../utils/toggleNew';

const CardList = ({ categoryImage, name, description, newp, category, slug }) => {

  return (
    <div className='cardlist'>
      <div className='cardlist__wrapper'>
        <img src={process.env.PUBLIC_URL + categoryImage.desktop} alt='' />
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
      <Link to={'/' + category + '/' + slug}>
      <ButtonSee className='orange'>see product</ButtonSee>
      </Link>
    </div>
  )
};

export default CardList;
