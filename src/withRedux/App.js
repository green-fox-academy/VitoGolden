import React from 'react';
// import {Providor} from 'react-redux';
import BuyAcorn from './containers/BuyAcorn';
import DisplayAcron from './containers/DisplayAcorn';
import EatAcron from './containers/EatAcorn';
// import EatAcorn from './containers/EatAcorn';
// import Display from '../withState/Display';
// import DisplayAcorn from './containers/DisplayAcorn';


const App = function () {
  return (
    <div>
      <BuyAcorn />
      <DisplayAcron />
      <EatAcron />
    </div>
  );
};

export default App;
