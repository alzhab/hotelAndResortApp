import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Flex } from 'atoms'
import { Icon } from 'native-base'
import { Spacing } from 'styles'

const SocialButton = ({ icon, color }) => {
  return (
    <TouchableOpacity>
      <Flex style={styles.social} layout="center center">
        <Icon type="FontAwesome5" name={icon} style={{ fontSize: 20, color: color }} />
      </Flex>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  social: {
    width: 50,
    height: 50,
    marginRight: 15,
    backgroundColor: '#eeeeee',
    borderRadius: Spacing.BORDER_RADIUS / 2
  }
})

export default SocialButton
