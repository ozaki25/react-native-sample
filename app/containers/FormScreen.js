import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'

const styles = StyleSheet.create({
  submit: {
    backgroundColor: '#00B0FF',
  },
})

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Form',
    headerStyle: { backgroundColor: '#d70000' }
  }

  render() {
    return (
      <View>
        <FormLabel>タイトル</FormLabel>
        <FormInput />
        <FormLabel>本文</FormLabel>
        <FormInput 
          multiline={true}
        />
        <Button title="送信" buttonStyle={styles.submit} />
      </View>
    )
  }
}

export default FormScreen