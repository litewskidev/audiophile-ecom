import './loadingSpinner.scss';

export const loadingSpinner = () => {
  return <div className='spinner'>
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        </div>
};
