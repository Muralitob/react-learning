import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { browserHistory, Router } from 'react-router';
import Routes from './routes';
// import { Provider } from 'mobx-react';
// import stores from './store/Todo';
ReactDOM.render(
                  <Router history={browserHistory} routes={Routes}></Router>
                , 
                document.getElementById('root'));
registerServiceWorker();
