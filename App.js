/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { store } from './Redux/store';
import { Provider } from 'react-redux'
import Index from './src/index';

const App = () => {



  return (
    <Provider store={store} >
      <SafeAreaView style={{ backgroundColor: "white", height: "100%", width: "100%" }} >
        <Index />
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      </SafeAreaView>
    </Provider>
  );
};


export default App;
