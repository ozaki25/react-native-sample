import React from 'react'
import { StackNavigator } from 'react-navigation'
import FormScreen from '../containers/FormScreen'
import BoardMessagesScreen from '../containers/BoardMessagesScreen'
import BoardListScreen from '../containers/BoardListScreen'

const AppNavigator = StackNavigator({
  BoardList: { screen: BoardListScreen },
  BoardMessages: { screen: BoardMessagesScreen },
  Form: { screen: FormScreen },
})

export default AppNavigator
