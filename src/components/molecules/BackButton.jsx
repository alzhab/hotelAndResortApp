import React from 'react'
import { Flex } from 'atoms'
import { Icon } from 'native-base'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'styles'

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Flex layout="center center" style={styles.backButton}>
        <Icon type="Feather" name="arrow-left" />
      </Flex>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    marginTop: 30,
    borderRadius: 50,
    backgroundColor: Colors.PRIMARY,
    width: 50,
    height: 50,
  },
})

export default BackButton
