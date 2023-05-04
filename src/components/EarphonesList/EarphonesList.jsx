import { useSelector } from 'react-redux';
import './EarphonesList.scss';
import { getEarphones } from '../../redux/productsRedux';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';

const EarphonesList = () => {
  const title = 'earphones';
  const earphonesList = useSelector(getEarphones);

  return (
    <div>
      <Navbar />
      <List list={earphonesList} title={title}/>
    </div>
  )
}

export default EarphonesList;
