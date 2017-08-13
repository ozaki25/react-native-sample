import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'

const data = [
  { key:'1', msg: 'hello' },
  { key:'2', msg: 'hello!' },
  { key:'3', msg: 'hello!!' },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})

class BoardMessagesScreen extends Component {
  static navigationOptions = {
    title: 'BoardMessages',
  }

  render() {
    return(
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({item}) => <Text>{item.msg}</Text>}
      />
    )
  }
}

export default BoardMessagesScreen