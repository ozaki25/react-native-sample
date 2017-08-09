import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class BoardName extends PureComponent {
  render() {
    return(
      <TouchableOpacity style={styles.boardName}>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  boardName: {
    backgroundColor: '#e5e5e5',
    borderWidth: 1,
    borderColor: '#eee',
    paddingVertical: 20,
    paddingHorizontal: 10,
  }
})
