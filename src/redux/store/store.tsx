import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import myReducer from '../reducers/index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['AuthReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['CounterReducer'],
};

const persistedreducer = persistReducer(persistConfig, myReducer);

const store = createStore(persistedreducer, applyMiddleware());

let persistor = persistStore(store);

export {store, persistor};
