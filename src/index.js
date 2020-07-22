import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import 'bootstrap/dist/css/bootstrap.min.css';
import authReducer from './Store/reducers/auth.reducer';
import authWatcher from './Saga/auth.saga';

function* rootSaga() {
  yield all([
    fork(authWatcher),
  ]);
}
const rootReducers = combineReducers({
  auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

let enhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(sagaMiddleware)
  )
} else {
  enhancer = compose(applyMiddleware(sagaMiddleware));
}

const store = createStore(rootReducers, enhancer);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();