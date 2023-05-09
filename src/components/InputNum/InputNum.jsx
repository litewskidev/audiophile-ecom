import './InputNum.scss';

const InputNum = (props) => {
  return (
    <div className='inputNum__wrapper'>
      <div className='inputNum__inner'>
        <p className='inputNum__symbols' onClick={props.decrement}>-</p>
        <p className='heading__h6 inputNum__count'>{props.count}</p>
        <p className='inputNum__symbols' onClick={props.increment}>+</p>
      </div>
    </div>
  )
};

export default InputNum;
