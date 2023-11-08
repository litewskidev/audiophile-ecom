import { useSelector } from 'react-redux';
import { getHeadphones } from '../../redux/productsRedux.js';
import { loadingSpinner } from '../../utils/loadingSpinner/loadingSpinner.js';
import { motion } from "framer-motion";
import List from '../List/List.jsx';
import './HeadphonesList.scss';

const HeadphonesList = () => {
  const title = 'headphones';
  const headphonesList = useSelector(getHeadphones);

  if(!headphonesList) {
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
      <List list={headphonesList} title={title}/>
    </div>
    </motion.div>
  )
};

export default HeadphonesList;
