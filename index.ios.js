import React, { Component } from 'react'
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} from 'react-native'
import App from './app/containers/app'

export default class ReactNativeSample extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'ReactNativeSample',
          component: App,
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample);
