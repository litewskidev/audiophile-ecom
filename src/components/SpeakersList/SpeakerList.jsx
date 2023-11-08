import { useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/productsRedux.js';
import { loadingSpinner } from '../../utils/loadingSpinner/loadingSpinner.js';
import { motion } from "framer-motion";
import List from '../List/List.jsx';
import './SpeakerList.scss';

const SpeakerList = () => {
  const title = 'speakers';
  const speakersList = useSelector(getSpeakers);

  if(!speakersList) {
    return loadingSpinner();
  }

  return (
    <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0,
      transition: { delay: 0.2, duration: 1, ease: [0, 0.9, 0.9, 1] }
    }}
    >
    <div>
      <List list={speakersList} title={title}/>
    </div>
    </motion.div>
  )
};

export default SpeakerList;
