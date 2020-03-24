import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';

import Main from './src/containers/counter/Main';

import {store, persistor} from './src/redux/store/store';
import Navigator from './src/navigator/Navigator';
export default App = () => {
  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    //     <Main />
    //    </PersistGate>
    //  </Provider>
    //  <LoginHandler />
    // <Splash />
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};
