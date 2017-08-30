import React, { Component } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import BoardName from '../components/BoardName'

const data = [
  { key:'1', name: 'Board1' },
  { key:'2', name: 'Board2' },
  { key:'3', name: 'Board3' },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})

class BoardListScreen extends Component {
  static navigationOptions = {
    title: 'BoardList',
    headerStyle: { backgroundColor: '#d70000' }
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({item}) => <BoardName {...item} {...this.props} />}
      />
    )
  }
}

export default BoardListScreen