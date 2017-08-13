import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  boardName: {
    backgroundColor: '#7986CB',
    borderWidth: 1,
    borderColor: '#E8EAF6',
    paddingVertical: 20,
    paddingHorizontal: 10,
  }
})

class BoardName extends Component {
  render() {
    return(
      <TouchableOpacity
        style={styles.boardName}
        onPress={() => props.navigation.dispatch({ type: 'BoardMessages' })}
      >
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

export default BoardName