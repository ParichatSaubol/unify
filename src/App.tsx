import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store';
import ApplicationNavigator from './navigators/Application';
import './translations';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/api';

//การทำงานหลักของแอพ
const App = (): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApolloProvider client={client}>
        <ApplicationNavigator />
      </ApolloProvider>
    </PersistGate>
  </Provider>
);

export default App;
