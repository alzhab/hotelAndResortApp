import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Spacing, Colors } from 'styles'
import { Icon } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Flex, Text } from 'atoms'

const MediumCard = ({ data, isBig, ...props }) => {
  const navigation = useNavigation()

  return (
    <Flex
      style={{ ...styles.card, ...props.style }}
      touchable
      onPress={() => navigation.navigate('RoomDetails', { id: data.id })}>
      {isBig && <Flex style={styles.cardBack}></Flex>}

      <Flex style={{ ...styles.image, height: isBig ? 400 : 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </Flex>
      <Flex style={{ ...styles.info, position: isBig ? 'absolute' : 'relative' }} row layout="space-between stretch">
        <Flex>
          <Text
            color={isBig ? '#fff' : Colors.HEADING_TEXT}
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
            color={isBig ? Colors.PRIMARY : Colors.HEADING_TEXT}
            weight="500"
            family="Roboto_medium"
            size={19}
          >${data.price}</Text>
          <Text color={Colors.SECOND_TEXT}>Per night</Text>
        </Flex>
      </Flex>
    </Flex >
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    backgroundColor: '#f5f5fb',
    width: '100%',
    position: 'relative'
  },
  cardBack: {
    borderRadius: 20,
    backgroundColor: '#000',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    zIndex: 2,
    opacity: 0.3
  },
  image: {
    borderRadius: 20,
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    maxWidth: '100%',
    overflow: 'hidden',
  },
  info: {
    width: "100%",
    paddingHorizontal: Spacing.WRAPPER_PADDING,
    borderRadius: 25,
    paddingVertical: 20,
    paddingTop: 18,
    bottom: 0,
    zIndex: 3
  }
})

export default MediumCard
