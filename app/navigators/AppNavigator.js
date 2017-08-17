import React from 'react'
import { StackNavigator } from 'react-navigation'
import FormScreen from '../containers/FormScreen'

const AppNavigator = StackNavigator({
  Form: { screen: FormScreen },
})

export default AppNavigator