import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
// 1. action.type에 따라 기존 state와 비교했을때 새로운 state가 어떻게 설정 되어야하는지 reducer에 정의함.
// 2. reducer를 이용하여 store 생성함.
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);