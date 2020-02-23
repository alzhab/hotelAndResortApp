import React from 'react'
import { Flex, Text } from 'atoms'
import { InputBox } from 'molecules'
import { Button } from 'native-base'
import { StyleSheet } from 'react-native'
import { Spacing, Colors } from 'styles'


const AvailabilityForm = ({ selectList, style }) => (
  <Flex style={{ ...styles.availabilityForm, ...style }} pad animation="fadeInDown" delay={1000}>
    <InputBox text="Check In" type="datePicker" />

    <InputBox text="Check Out" type="datePicker" />

    <InputBox text="Room Type" type="select" selectList={selectList} />

    <Flex row layout="space-between" style={{ width: '100%' }}>
      <InputBox text="Adult" short keyboardType="decimal-pad" />

      <InputBox text="Children" short keyboardType="decimal-pad" />
    </Flex>

    <Button
      rounded
      style={styles.availabilityFormButton}>
      <Text
        weight="700"
        size={15}
        style={{ textAlign: "center", width: "100%" }}
      >Check Availability</Text>
    </Button>
  </Flex >
)

const styles = StyleSheet.create({
  availabilityForm: {
    width: '100%',
    borderRadius: Spacing.BORDER_RADIUS,
    backgroundColor: '#fff',
    paddingVertical: 20,
    marginBottom: 40,
  },
  availabilityFormButton: {
    width: '100%',
    textAlign: 'center',
    height: 40,
    marginTop: 15
  },
})

export default AvailabilityForm
