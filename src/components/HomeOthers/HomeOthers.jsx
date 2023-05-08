import { Link } from 'react-router-dom';
import ButtonSee from '../ButtonSee/ButtonSee';
import './HomeOthers.scss';

const HomeOthers = (props) => {
  const zx9 = props[5];
  const zx7 = props[4];
  const yx1 = props[0];

  return (
    <div className='homeothers__wrapper'>
      <div className='box__one'>
        <div className='box__one__inner'>
          <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-speaker-zx9.png'} alt='' />
          <p className='heading__h2'>zx9<br />speaker</p>
          <p className='text__body'>Upgrade to premium speakers that are<br />phenomenally built to deliver truly<br />remarkable sound.</p>
        </div>
        <Link to='/speakers/zx9-speaker'>
          <ButtonSee className='black'>see product</ButtonSee>
        </Link>
      </div>
      <div className='box__two'>
        <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-speaker-zx7.jpg'} alt='' />
        <div className='box__two__inner'>
          <p className='heading__h4'>zx7 speaker</p>
          <Link to='/speakers/zx7-speaker'>
            <ButtonSee className='transparent'>see product</ButtonSee>
          </Link>
        </div>
      </div>
      <div className='box__three'>
        <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-earphones-yx1.jpg'} alt='' />
      </div>
      <div className='box__four'>
        <div className='box__four__inner'>
          <p className='heading__h4'>yx earphones</p>
          <Link to='/earphones/yx1-earphones'>
            <ButtonSee className='transparent'>see product</ButtonSee>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default HomeOthers;
