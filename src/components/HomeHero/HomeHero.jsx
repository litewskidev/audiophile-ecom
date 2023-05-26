import { useNavigate } from 'react-router-dom';
import { toggleNew } from '../../utils/toggleNew.js';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import './HomeHero.scss'

const HomeHero = ({ newp, name, slug }) => {
  const navigate = useNavigate();

  return (
    <div className='home__hero'>
      <div className='home__pattern'></div>
      <div className='home__hero__inner'>
        <div className='image__hero'>
          <picture>
            <source media='(max-width: 540px)' srcSet={process.env.PUBLIC_URL + '/assets/home/mobile/image-header.jpg'} />
            <source media='(max-width: 1023.98px)' srcSet={process.env.PUBLIC_URL + '/assets/home/tablet/image-header.jpg'} />
            <img src={process.env.PUBLIC_URL + '/assets/home/desktop/image-hero.jpg'} alt='headphones' />
          </picture>
        </div>
        <div className='info__hero'>
          <div className='info__hero__inner'>
            {(toggleNew(newp) === true ) ? (
              <p className='text__overline info__hero__overline'>new product</p>
              ) : (
              <p></p>
            )}
            <h1 className='heading__h2'>{name}</h1>
            <p className='text__body'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          </div>
          <div className='btn__home' onClick={() => navigate('/' + slug)}>
            <ButtonSee className='orange'>see product</ButtonSee>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeHero;
