import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { FormLabel, FormInput } from 'react-native-elements'

class FormScreen extends Component {
  static navigationOptions = {
    title: 'Form',
  }

  render() {
    return (
      <View>
        <FormLabel>タイトル</FormLabel>
        <FormInput />
        <FormLabel>本文</FormLabel>
        <FormInput 
          multiline={true}
          numberOfLines={4}
        />
      </View>
    )
  }
}

export default FormScreen