import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../node_modules/bootstrap/scss/bootstrap.scss';

ReactDOM.render(
<MuiThemeProvider>
  <App />
</MuiThemeProvider>

, document.getElementById('root'));
registerServiceWorker();
