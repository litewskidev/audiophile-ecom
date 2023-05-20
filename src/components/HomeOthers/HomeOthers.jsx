import { useNavigate } from 'react-router-dom';
import ButtonSee from '../ButtonSee/ButtonSee.jsx';
import './HomeOthers.scss';

const HomeOthers = () => {
  const navigate = useNavigate();

  return (
    <div className='homeothers__wrapper'>
      <div className='box__one'>
        <div className='box__one__inner'>
          <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-speaker-zx9.png'} alt='speaker' />
          <p className='heading__h2'>zx9<br />speaker</p>
          <p className='text__body'>Upgrade to premium speakers that are<br />phenomenally built to deliver truly<br />remarkable sound.</p>
        </div>
        <div onClick={() => navigate('/zx9-speaker')}>
          <ButtonSee className='black'>see product</ButtonSee>
        </div>
      </div>
      <div className='box__two'>
        <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-speaker-zx7.jpg'} alt='speaker' />
        <div className='box__two__inner'>
          <p className='heading__h4'>zx7 speaker</p>
          <div onClick={() => navigate('/zx7-speaker')}>
            <ButtonSee className='transparent'>see product</ButtonSee>
          </div>
        </div>
      </div>
      <div className='box__three'>
        <img src={process.env.PUBLIC_URL + '/assets/home/mobile/image-earphones-yx1.jpg'} alt='earphones' />
      </div>
      <div className='box__four'>
        <div className='box__four__inner'>
          <p className='heading__h4'>yx earphones</p>
          <div onClick={() => navigate('/yx1-earphones')}>
            <ButtonSee className='transparent'>see product</ButtonSee>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeOthers;
