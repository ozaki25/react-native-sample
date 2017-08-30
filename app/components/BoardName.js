import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  boardName: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#E8EAF6',
    paddingVertical: 20,
    paddingHorizontal: 10,
  }
})

class BoardName extends Component {
  render() {
    console.log(this.props)
    const navigation = this.props.navigation
    return(
      <TouchableOpacity
        style={styles.boardName}
        onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'BoardMessages' }))}
      >
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default BoardName