import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {createHashHistory} from 'history';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import {rootReducer} from './store/reducers';
import registerServiceWorker from './sw';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './containers/App';

const history = createHashHistory({
    hashType: 'noslash'
});

var route = '/:pageId(epic|)?'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={store}>
          <ConnectedRouter history={history}>
              <div>
                  <Route path={route} component={(props) => <App pageId={props.match.params.pageId}/>}/>
              </div>
          </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// Service Worker For Cache
registerServiceWorker();
