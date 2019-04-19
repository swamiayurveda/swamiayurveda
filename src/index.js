import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/scss/bootstrap.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
