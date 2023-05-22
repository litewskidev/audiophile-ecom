/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <div className='footer__pattern'></div>
      <img className='footer__logo' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/logo.svg`} alt='logo' />
      <ul className='footer__links'>
        <li>
          <Link to='/'>
            <h1 className='text__subtitle'>HOME</h1>
          </Link>
        </li>
        <li>
          <Link to='/headphones'>
            <h1 className='text__subtitle'>HEADPHONES</h1>
          </Link>
        </li>
        <li>
          <Link to='/speakers'>
            <h1 className='text__subtitle'>SPEAKERS</h1>
          </Link>
        </li>
        <li>
          <Link to='/earphones'>
            <h1 className='text__subtitle'>EARPHONES</h1>
          </Link>
        </li>
      </ul>
      <p className='text__body'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Visit our demo facility - we’re open 7 days a week.</p>
      <div className='footer__bottom'>
        <p className='text__body'>Copyright 2023. All Rights Reserved</p>
        <ul className='footer__icons'>
          <li><a href='#'><img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-facebook.svg`} alt='facebook' /></a></li>
          <li><a href='#'><img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-instagram.svg`} alt='instagram' /></a></li>
          <li><a href='#'><img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-twitter.svg`} alt='twitter' /></a></li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;
