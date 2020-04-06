// import React from 'react';
// // import {PersistGate} from 'redux-persist/es/integration/react';
// import {Provider} from 'react-redux';
// import store from './src/reducer/index';
// // import Main from './src/containers/counter/Main';

// // import {store, persistor} from './src/redux/store/store';
// import Navigator from './src/navigator/Navigator';
// export default App = () => {
//   return (
//     // <Provider store={store}>
//     // <PersistGate persistor={persistor}>
//     //     <Main />
//     //    </PersistGate>
//     //  </Provider>
//     //  <LoginHandler />
//     // <Splash />
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );
// };

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Navigator from './src/navigator/Navigator';
import store from './src/reducer/index';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
