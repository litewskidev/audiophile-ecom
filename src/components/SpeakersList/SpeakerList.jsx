import { useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/productsRedux';
import './SpeakerList.scss';
import Navbar from '../Navbar/Navbar';
import List from '../List/List';

const SpeakerList = () => {

  const title = 'speakers';
  const speakersList = useSelector(getSpeakers);

  return (
    <div>
      <Navbar />
      <List list={speakersList} title={title}/>
    </div>
  )
};

export default SpeakerList;
