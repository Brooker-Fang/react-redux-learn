import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux'
import { Provider } from './my-redux/react-redux'
// 引入store
import { store } from './store'

ReactDOM.render(
  <React.StrictMode>
    {/* store 要用Provider 组件 传递给其他组件 */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
