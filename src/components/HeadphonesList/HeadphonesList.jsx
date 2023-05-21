import { useSelector } from 'react-redux';
import { getHeadphones } from '../../redux/productsRedux.js';
import { loadingSpinner } from '../../utils/loadingSpinner/loadingSpinner.js';
import List from '../List/List.jsx';
import './HeadphonesList.scss';

const HeadphonesList = () => {
  const title = 'headphones';
  const headphonesList = useSelector(getHeadphones);

  if(!headphonesList) {
    return loadingSpinner();
  }

  return (
    <div>
      <List list={headphonesList} title={title}/>
    </div>
  )
};

export default HeadphonesList;
