import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores';

const root = new RootStore();

ReactDOM.render(
  // ...root 로 스토어 자동 설정
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
