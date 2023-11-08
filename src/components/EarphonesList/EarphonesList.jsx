import { useSelector } from 'react-redux';
import { getEarphones } from '../../redux/productsRedux.js';
import { loadingSpinner } from '../../utils/loadingSpinner/loadingSpinner.js';
import { motion } from "framer-motion";
import List from '../List/List.jsx';
import './EarphonesList.scss';

const EarphonesList = () => {
  const title = 'earphones';
  const earphonesList = useSelector(getEarphones);

  if(!earphonesList) {
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
      <List list={earphonesList} title={title}/>
    </div>
    </motion.div>
  )
}

export default EarphonesList;
