import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';

ReactDOM.render(
    <HashRouter>
    	<ScrollToTop>
        	<App/>
        </ScrollToTop>
    </HashRouter>
, document.getElementById('root'));

// Don't worry about this
registerServiceWorker();
