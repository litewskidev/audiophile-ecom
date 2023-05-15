import { useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/productsRedux.js';
import List from '../List/List.jsx';
import './SpeakerList.scss';

const SpeakerList = () => {

  const title = 'speakers';
  const speakersList = useSelector(getSpeakers);

  return (
    <div>
      <List list={speakersList} title={title}/>
    </div>
  )
};

export default SpeakerList;
