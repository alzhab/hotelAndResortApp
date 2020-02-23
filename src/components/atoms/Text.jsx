import React from 'react'
import { Text } from 'native-base'
import { FONT_SIZE_REGULAR, MAIN_TEXT, FONT_FAMILY_REGULAR } from 'styles'

const MyText = ({
  children,
  size = FONT_SIZE_REGULAR,
  color = MAIN_TEXT,
  family = FONT_FAMILY_REGULAR,
  weight = '400',
  center,
  fullWidth,
  ...props
}) => {
  return (
    <Text style={{
      color: color,
      fontSize: size,
      fontWeight: weight,
      fontFamily: family,
      textAlign: center ? 'center' : 'left',
      ...props.style
    }}>{children}</Text>
  )
}

export default MyText
