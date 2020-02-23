import React, { useCallback } from 'react'
import { StatusBar } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

const withStatusBar = (
  Component,
  background = '#fff',
  theme = 'dark-content',
  translucent = true
) => {
  return (props) => {
    useFocusEffect(
      useCallback(() => {
        StatusBar.setTranslucent(translucent)
        StatusBar.setBarStyle(theme);
        StatusBar.setBackgroundColor(background)
      }, [])
    );


    return (
      <>
        <StatusBar animated={true} />
        <Component {...props} />
      </>
    )
  }
}

export default withStatusBar