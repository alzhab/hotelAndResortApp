import React from 'react'
import { ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Colors, Spacing } from 'styles'
import { BackButton } from 'molecules'
import { Flex } from 'atoms'

const Hero = ({
  backColor = Colors.PRIMARY,
  height = Spacing.DeviceHeight * 0.6,
  image,
  cover = true,
  imageStyle,
  withButton = true,
  style,
}) => {
  const navigation = useNavigation()

  if (cover) {
    return (
      <ImageBackground
        style={{ ...styles.image, height, ...style }}
        source={image}
      >
        {
          withButton &&
          <BackButton navigation={navigation} />
        }
      </ImageBackground>
    )
  }

  return (
    <Flex
      row
      style={{ ...styles.image, backgroundColor: backColor, height, ...style }}
      layout="center center"
    >
      <Image source={image} style={imageStyle} resizeMode="cover" />
    </Flex>
  )
}

const styles = {
  image: {
    borderBottomLeftRadius: Spacing.BORDER_RADIUS,
    borderBottomRightRadius: Spacing.BORDER_RADIUS,
    overflow: 'hidden',
    paddingHorizontal: Spacing.WRAPPER_PADDING,
  },
}

export default Hero
