import { useSelector } from 'react-redux';
import List from '../List/List';
import './HeadphonesList.scss';
import { getHeadphones } from '../../redux/productsRedux';
import Navbar from '../Navbar/Navbar';

const HeadphonesList = () => {

  const title = 'headphones';
  const headphonesList = useSelector(getHeadphones);

  return (
    <div>
      <Navbar />
      <List list={headphonesList} title={title}/>
    </div>
  )
};

export default HeadphonesList;
