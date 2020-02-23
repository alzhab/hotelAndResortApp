import React from 'react'
import { Flex, Text } from 'atoms'
import { Icon } from 'native-base'
import { Colors } from 'styles'
import { StyleSheet } from 'react-native'


const Facility = ({ icon, label }) => {
  return (
    <Flex style={styles.facility} layout="center center" >
      <Flex style={styles.facilityIcon} layout="center center">
        <Icon type="Feather" name={icon} style={{ color: Colors.SECOND_PRIMARY }} />
      </Flex>
      <Text color={Colors.SECOND_TEXT} weight="700" family="Roboto_medium" size={15}>{label}</Text>
    </Flex>
  )
}

const styles = StyleSheet.create({
  facility: {
    marginRight: 15
  },
  facilityIcon: {
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    width: 60,
    height: 60,
    position: 'relative',
    marginBottom: 10
  },
})

export default Facility
