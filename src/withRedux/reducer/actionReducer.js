import {combineReducers} from 'redux';  //eslint-disable-line

// const eatReducer = (state = {
//   count: 0,
// }, action) => state;  //eslint-disable-line

const actionReducer = (defaultStatus = { count: 0 }, action) => {        //eslint-disable-line
  console.log(defaultStatus, action);
  // if (action.type === 'buy') {
  //   // return { ...defaultStatus, count: defaultStatus.count + 1 };
  //   return Object.assign({}, defaultStatus, { count: defaultStatus.count + 1 });
  // }
  // // return { ...defaultStatus, count: defaultStatus.count - 1 };
  // return Object.assign({}, defaultStatus, { count: defaultStatus.count - 1 });
  switch (action.type) {
    case 'buy':
      return Object.assign({}, defaultStatus, { count: defaultStatus.count + 1 });
    case 'eat':
      if (defaultStatus.count <= 0) {
        alert('eat shit')
        return defaultStatus;
      }
      return Object.assign({}, defaultStatus, { count: defaultStatus.count - 1 });
    default:
      return defaultStatus;
  }
};

export default actionReducer;
