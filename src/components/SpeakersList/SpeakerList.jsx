import { useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/productsRedux.js';
import { loadingSpinner } from '../../utils/loadingSpinner/loadingSpinner.js';
import List from '../List/List.jsx';
import './SpeakerList.scss';

const SpeakerList = () => {
  const title = 'speakers';
  const speakersList = useSelector(getSpeakers);

  if(!speakersList) {
    return loadingSpinner();
  }

  return (
    <div>
      <List list={speakersList} title={title}/>
    </div>
  )
};

export default SpeakerList;
