import './About.scss';

const About = () => {
  return (
    <div className='about__wrapper'>
      <div className='about__info'>
        <h1 className='heading__h4'>Bringing you the <br /><span>best</span> audio gear</h1>
        <p className='text__body'>Located at the heart of New York City, Audiophile is
          the premier store for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for you to browse and
          experience a wide range of our products. Stop by our store to meet some of the fantastic
          people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
      <picture>
        <source media='(max-width: 540px)' srcSet={`${process.env.PUBLIC_URL}/assets/shared/mobile/image-best-gear.jpg`} />
        <source media='(max-width: 1023.98px)' srcSet={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-best-gear.jpg`} />
        <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-best-gear.jpg`} alt='male'/>
      </picture>
    </div>

  )
};

export default About;
