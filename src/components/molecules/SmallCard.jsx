import React from 'react'
import { Flex, Text } from 'atoms'
import { StyleSheet, Image } from 'react-native'
import { Colors, Spacing } from 'styles'
import { Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const SmallCard = ({ data, isCategory, isPrice, ...props }) => {
  let content = (
    <>
      <Flex>
        <Text
          color={Colors.HEADING_TEXT}
          weight="500"
          family="Roboto_medium"
          size={19}
          style={{ marginBottom: 10 }}
        >{data.title}</Text>

        <Flex row>
          {
            [0, 0, 0, 0, 0].map((item, index) => (
              <Icon
                type="MaterialIcons"
                name="star"
                key={index.toString()}
                style={{ fontSize: 17, color: Colors.PRIMARY }}
              />
            ))
          }
        </Flex>
      </Flex>

      <Flex layout="space-between flex-end">
        <Text
          color={Colors.HEADING_TEXT}
          weight="500"
          family="Roboto_medium"
          size={19}
        >${data.price}</Text>
        <Text color={Colors.SECOND_TEXT}>Per night</Text>
      </Flex>
    </>
  )

  const navigation = useNavigation()

  const onPressHandler = () => {
    // Потом надо переводить на страницу всех комнат с фильтром
    // TODO Надо сделать страницу поиска комнат и страницу саиска комнат
    if (!isCategory) {
      navigation.navigate('RoomDetails', { id: data.id })
    }
  }

  if (isCategory) {
    content = <Flex layout="center center" row>
      <Text
        color={Colors.HEADING_TEXT}
        weight="500"
        family="Roboto_medium"
        size={15}
        style={{ marginBottom: 0, textAlign: 'center', width: '100%' }}
      >{data.title}</Text>
    </Flex>
  }

  if (isPrice) {
    content = <>
      <Flex layout="flex-start flex-start">
        <Text
          color={Colors.HEADING_TEXT}
          weight="500"
          family="Roboto_medium"
          size={19}
        >${data.price}</Text>

        <Flex row>
          {
            [0, 0, 0, 0, 0].map((item, index) => (
              <Icon
                type="MaterialIcons"
                name="star"
                key={index.toString()}
                style={{ fontSize: 17, color: Colors.PRIMARY }}
              />
            ))
          }
        </Flex>
      </Flex>
    </>
  }

  return (
    <Flex
      style={{ ...styles.card, ...props.style }}
      touchable
      onPress={onPressHandler}>
      <Flex style={styles.image}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </Flex>
      <Flex style={{ ...styles.info, paddingVertical: isCategory || isPrice ? 10 : 20 }} row layout="space-between stretch">
        {content}
      </Flex>
    </Flex >
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: '#f5f5fb',
    width: '100%'
  },
  image: {
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    maxWidth: '100%',
    height: 100,
    overflow: 'hidden'
  },
  info: {
    width: "100%",
    paddingHorizontal: Spacing.WRAPPER_PADDING,
    borderRadius: 25,
    paddingVertical: 10,
  },

})

export default SmallCard
