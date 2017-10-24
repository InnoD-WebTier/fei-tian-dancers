import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'))

// Don't worry about this
registerServiceWorker();
