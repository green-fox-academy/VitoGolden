import { applyMiddleware, createStore, combineReducers } from 'redux';

const defaultState = {
  a: 'a',
  b: 'b',
};         //要有默认state

const reducer = function (state = defaultState, action) {
}

const logger = (store) => (next) => (action) => {    //eslint-disable-line
  action.payload = 'xxx';  //修改action内容
  next(action);   //必须写
};

const error = (store) => (next) => (action) => {     //eslint-disable-line
  try {
    next(action);
  } catch (e) {
    console.log('aaaaaaaaaaaaa', e);
  }
};

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, 0, middleware);

store.subscribe(() => {
  console.log('changed', store.getState());
});

store.dispatch({ type: 'INC', payload: 1 });
