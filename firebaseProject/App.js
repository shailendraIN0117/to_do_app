import React from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import store from './Components/Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
