import './ButtonShop.scss';

const ButtonShop = props => {
  return (
    <div className='btnWrapper'>
      <button className='btnShop'>{props.children}</button>
      <img className='arrow' src={`${process.env.PUBLIC_URL}/assets/shared/desktop/icon-arrow-right.svg`} alt='shop' />
    </div>
  )
};

export default ButtonShop;
