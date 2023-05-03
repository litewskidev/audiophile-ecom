import './ButtonSee.scss';

const ButtonSee = props => {
  return (
    <button className={`btn ${props.class}`}>{props.children}</button>
  )
};

export default ButtonSee;
