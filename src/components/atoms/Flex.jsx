import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Spacing } from 'styles'

const Flex = ({
  row,
  layout = "flex-start flex-start",
  children,
  pad,
  touchable,
  onPress,
  ...props
}) => {
  const [justifyContent, alignItems] = layout.split(" ")

  const Container = touchable ? TouchableOpacity : View

  return (
    <Container style={
      {
        flexDirection: row ? 'row' : 'column',
        alignItems,
        justifyContent,
        paddingHorizontal: pad ? Spacing.WRAPPER_PADDING : 0,
        ...props.style,
      }
    } onPress={onPress}>
      {children}
    </Container>
  )
}

export default Flex
