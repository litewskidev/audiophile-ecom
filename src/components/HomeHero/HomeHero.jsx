import { Link } from 'react-router-dom';
import { toggleNew } from '../../utils/toggleNew.jsx';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import './HomeHero.scss'

const HomeHero = ({ newp, name, description, category, slug }) => {
  return (
    <div className='home__hero'>
      <div className='home__pattern'></div>
      <div className='image__hero'>
        <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-header.jpg'} alt='' />
      </div>
      <div className='info__hero'>
        {(toggleNew(newp) === true ) ? (
          <p className='text__overline'>new product</p>
          ) : (
          <p></p>
        )}
        <h1 className='heading__h2'>{name}</h1>
        <p className='text__body'>Experience natural, lifelike audio and<br />exceptional build quality made for the<br />passionate music enthusiast.</p>
        <Link to={'/' + category + '/' + slug}>
          <ButtonSee className='orange'>see product</ButtonSee>
        </Link>
      </div>
    </div>
  )
};

export default HomeHero;
