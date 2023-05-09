import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store.js';
import ScrollToTop from './utils/ScrollToTop.jsx';
import './styles/global.scss';
import './styles/settings.scss';
import './styles/typography.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </HashRouter>
  //</React.StrictMode>
);
