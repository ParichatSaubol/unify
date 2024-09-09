import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  type Storage,
} from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchSelector,
  useSelector as useReduxSelector,
} from 'react-redux';

import theme from './theme';
import cart from './cart';
import auth from './auth';

const reducers = combineReducers({
  theme,
  cart,
  auth,
});

const storage = new MMKV();
export const reduxStorage: Storage = {
  setItem: async (
    key: string,
    value: string | number | boolean | Uint8Array,
  ) => {
    storage.set(key, value);
    return await Promise.resolve(true);
  },
  getItem: async (key: string) => {
    const value = storage.getString(key);
    return await Promise.resolve(value);
  },
  removeItem: async (key: string) => {
    storage.delete(key);
    await Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', 'auth', 'tote'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    if (__DEV__ && process.env.JEST_WORKER_ID != null) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
const useDispatch = (): AppDispatch => useDispatchSelector<AppDispatch>();
const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;
export { useSelector, useDispatch };

export { store, persistor };
