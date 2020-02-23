import React, { Component } from 'react'
import Navigator from 'navigations'
import store from './redux'
import { Provider } from 'react-redux'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Container, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import { StatusBar } from 'react-native';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
      Roboto_medium: require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            <Navigator />
          </Container>
        </StyleProvider>
      </Provider>
    )
  }
}

export default Main