import React from 'react'
import { StackNavigator } from 'react-navigation'
import BoardListScreen from '../containers/BoardListScreen'
import BoardMessagesScreen from '../containers/BoardMessagesScreen'

const AppNavigator = StackNavigator({
  BoardList: { screen: BoardListScreen },
  BoardMessages: { screen: BoardMessagesScreen },
})

export default AppNavigator