import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import BoardName from '../components/BoardName'

const data = [
  { key:'1', name: 'hello' },
  { key:'2', name: 'hello!' },
  { key:'3', name: 'hello!' },
  { key:'4', name: 'hello!' },
  { key:'5', name: 'hello!' },
  { key:'6', name: 'hello!' },
  { key:'7', name: 'hello!' },
  { key:'8', name: 'hello!' },
  { key:'9', name: 'hello!' },
  { key:'10', name: 'hello' },
  { key:'11', name: 'hello' },
  { key:'12', name: 'hello!' },
  { key:'13', name: 'hello!' },
  { key:'14', name: 'hello!' },
  { key:'15', name: 'hello!' },
  { key:'16', name: 'hello!' },
  { key:'17', name: 'hello!' },
  { key:'18', name: 'hello!' },
  { key:'19', name: 'hello!' },
]

export default class App extends PureComponent {
  _renderItem = ({item}) => <BoardName {...item} />

  render() {
    return (
      <FlatList
        style={styles.container}
        data={data}
        renderItem={this._renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
})