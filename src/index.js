import React from 'react';
import ReactDOM from 'react-dom';
// import GoldenAcorn from './withState/GoldenAcorn';
import { Provider } from 'react-redux';
import App from './withRedux/App';
import store from './withRedux/store';

ReactDOM.render(
  // <Button name="buy it" />,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
