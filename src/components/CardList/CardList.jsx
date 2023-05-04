import './CardList.scss';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';

const CardList = ({ categoryImage, name, description, newp }) => {

  const toggleNew = () => {
    if(newp === true) {
      return true
    } else {
      return false
    }
  };

  return (
    <div className='cardlist'>
      <div className='cardlist__wrapper'>
        <img src={process.env.PUBLIC_URL + categoryImage.mobile} alt='' />
        <div>
          {(toggleNew() === true) ? (
            <p className='text__overline'>NEW PRODUCT</p>
          ) : (
            <p></p>
          )}
        </div>
        <h1 className='heading__h4'>{name}</h1>
        <p className='text__body'>{description}</p>
      </div>
      <ButtonSee className='orange'>see product</ButtonSee>
    </div>
  )
};

export default CardList;
