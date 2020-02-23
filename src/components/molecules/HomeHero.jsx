import React from 'react'
import { Flex, Text } from 'atoms'
import { Icon, Input } from 'native-base'
import { ImageBackground, StyleSheet } from 'react-native'
import { Spacing, Colors } from 'styles'

const HomeHero = () => {
  return (
    <ImageBackground style={{ ...styles.hero }} source={require('assets/images/hero.jpg')}>
      <Flex style={styles.searchBox} row layout="flex-start center">
        <Icon type="Feather" name="search" style={styles.searchIcon} />
        <Input
          placeholder="Search a resort or hotel"
          placeholderTextColor={Colors.SECOND_TEXT}
          style={styles.searchInput}
        />
      </Flex>

      <Text color='#fff' size={40} weight="700" style={{
        position: 'absolute',
        bottom: '10%',
        left: Spacing.WRAPPER_PADDING,
        lineHeight: 50
      }}>
        Enjoy{"\n"}
          Your{"\n"}
          Holidays{"\n"}
      </Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  hero: {
    paddingHorizontal: Spacing.WRAPPER_PADDING,
    paddingTop: 30,
    paddingBottom: 60,
    backgroundColor: Colors.PRIMARY,
    height: Spacing.DeviceHeight * 0.65
  },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: Spacing.BORDER_RADIUS,
    paddingHorizontal: 15
  },
  searchIcon: {
    color: '#acacbc',
    fontSize: 15,
    marginRight: 5
  },
  searchInput: {
    paddingVertical: 0,
    height: 35
  },
})

export default HomeHero
