import React, { useState } from 'react'
import { Input, Item, DatePicker, Icon } from 'native-base'
import { StyleSheet, Picker } from 'react-native'
import { Spacing } from 'styles'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const InputBox = ({
  text,
  short = false,
  type = "input",
  disabled = false,
  keyboardType = 'default',
  selectList,
  back,
  ...props
}) => {
  const [chosenDate, setChosenDate] = useState(null)
  const [selected, setSelected] = useState('default')

  const setDate = (newDate) => {
    setChosenDate(newDate);
  }

  let element = <Input
    style={styles.formInput}
    placeholderTextColor='#acacbc'
    keyboardType={keyboardType}
    placeholder={text}
    disabled={disabled}
  />

  if (type === 'datePicker') {
    element = <DatePicker
      defaultDate={new Date(2018, 4, 4)}
      minimumDate={new Date(2018, 1, 1)}
      maximumDate={new Date(2018, 12, 31)}
      locale={"en"}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={true}
      animationType={"fade"}
      androidMode={"calendar"}
      placeHolderText={text}
      textStyle={{ color: Colors.HEADING_TEXT, fontSize: 18, paddingHorizontal: 0, width: '100%' }}
      placeHolderTextStyle={{ color: "#acacbc", fontSize: 18, paddingHorizontal: 0, width: '100%' }}
      onDateChange={setDate}
      disabled={disabled}
    />
  } else if (type === 'select') {
    element = (
      <Picker
        note={false}
        mode="dropdown"
        placeholder={text}
        style={styles.formInput}
        selectedValue={selected}
        onValueChange={(value) => { setSelected(value) }}
      >
        <Picker.Item label={text} value="default" />
        {
          selectList.map(select => (
            <Picker.Item label={select.label} value={select.id} key={select.id} />
          ))
        }
      </Picker>
    )
  }

  return (
    <Item
      style={[
        styles.formBox,
        short ? styles.formBoxShort : null,
        { backgroundColor: back ? back : '#f5f5fb' }]}
      {...props}
    >
      {element}
    </Item>
  )
}

const styles = StyleSheet.create({
  formBox: {
    width: '100%',
    borderRadius: Spacing.BORDER_RADIUS,
    paddingHorizontal: 20,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  formBoxShort: {
    width: '45%'
  },
  formInput: {
    width: '100%',
    maxHeight: 40,
    paddingLeft: 0
  },
})

export default InputBox
