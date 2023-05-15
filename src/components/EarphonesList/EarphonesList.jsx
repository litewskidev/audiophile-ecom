import { useSelector } from 'react-redux';
import { getEarphones } from '../../redux/productsRedux.js';
import List from '../List/List.jsx';
import './EarphonesList.scss';

const EarphonesList = () => {
  const title = 'earphones';
  const earphonesList = useSelector(getEarphones);

  return (
    <div>
      <List list={earphonesList} title={title}/>
    </div>
  )
}

export default EarphonesList;
