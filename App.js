import React from 'react';
import Main from './src';
import { StatusBar } from 'react-native';
StatusBar.setTranslucent(true);

export default function App() {
  return (
    <>
      <StatusBar animated={true} translucent={false} backgroundColor="#fff" barStyle="dark-content" />
      <Main />
    </>
  );
}
