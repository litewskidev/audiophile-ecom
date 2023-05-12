import './InputText.scss';

const InputText = props => {
  return (
    <form>
      <label form={props.id}>{props.label}</label><br />
      <input type={props.type} id={props.id} placeholder={props.placeholder} />
    </form>
  )
};

export default InputText;
