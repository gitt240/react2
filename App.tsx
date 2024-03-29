import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/asm/Redux/Store';
import AppNavigation from './src/asm/AppNavigation';
import QAA from './src/asm/Main/Stacks/QAA';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
