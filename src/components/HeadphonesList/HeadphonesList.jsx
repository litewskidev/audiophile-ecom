import { useSelector } from 'react-redux';
import { getHeadphones } from '../../redux/productsRedux.js';
import List from '../List/List.jsx';
import './HeadphonesList.scss';

const HeadphonesList = () => {
  const title = 'headphones';
  const headphonesList = useSelector(getHeadphones);

  return (
    <div>
      <List list={headphonesList} title={title}/>
    </div>
  )
};

export default HeadphonesList;
