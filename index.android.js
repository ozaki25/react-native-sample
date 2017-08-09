import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
} from 'react-native'
import App from './app/containers/app'

export default class ReactNativeSample extends Component {
  render() {
    return <App style={styles.container} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

AppRegistry.registerComponent('ReactNativeSample', () => ReactNativeSample)
