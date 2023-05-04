import './ButtonSee.scss';

const ButtonSee = props => {
  return (
    <button className={`btn ${props.className}`}>
      {props.children}
    </button>
  )
};

export default ButtonSee;
