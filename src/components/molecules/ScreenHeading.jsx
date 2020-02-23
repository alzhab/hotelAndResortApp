import React from 'react'
import { View } from 'react-native'
import { Text } from 'atoms'
import { Colors, Typography, Spacing } from 'styles'

const ScreenHeading = ({ title, noSpace, ...props }) => {
  return (
    <View style={{ paddingVertical: 15, paddingHorizontal: Spacing.WRAPPER_PADDING, paddingTop: noSpace ? 15 : 30, ...props.style }}>
      <Text
        color={Colors.HEADING_TEXT}
        size={23}
        family={Typography.FONT_FAMILY_BOLD}
        weight="700"
      >{title}</Text>
    </View>
  )
}

export default ScreenHeading 
