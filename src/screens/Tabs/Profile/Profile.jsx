import React from 'react'
import { StyleSheet, Image, ScrollView } from 'react-native'
import { View, Container, Icon } from 'native-base'
import { Colors, Spacing } from 'styles'
import { Text, Flex } from 'atoms'
import { ScreenHeading, MediumCard, DataList } from 'molecules'
import { withStatusBar, withScreenAnimation } from 'utils'


const Profile = ({ user }) => {
  return (
    <Container style={{ backgroundColor: '#fdfdfd' }}>
      <ScrollView >
        <Flex row layout="flex-start flex-start" style={styles.userInfo}>
          <View style={styles.avatar}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={user.avatar}
              resizeMode="cover" />
          </View>

          <Flex>
            <Text
              family="Roboto_medium"
              size={20}
              weight="700"
              color={Colors.HEADING_TEXT}
              style={{ marginBottom: 5 }}
            >{user.name}</Text>
            <Flex row layout="flex-start center" >
              <Icon
                type="Feather"
                name="map-pin"
                style={{ fontSize: 15, marginRight: 10, color: Colors.SECOND_TEXT }} />
              <Text
                color={Colors.SECOND_TEXT} size={15}>
                {user.location}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <DataList statistic={user.statistic} />

        <Flex style={styles.content}>
          <ScreenHeading title="Just Seen" noSpace />
          <Flex pad style={{ width: "100%" }}>
            {
              user.history.map(room => (
                <MediumCard style={styles.card} data={room} key={room.id.toString()} />
              ))
            }
          </Flex>
        </Flex>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  userInfo: {
    paddingTop: 45,
    paddingHorizontal: Spacing.WRAPPER_PADDING
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 15,
    overflow: 'hidden',
    backgroundColor: Colors.SECOND_TEXT
  },
  content: {
    flex: 1,
    paddingTop: 15,
    borderTopLeftRadius: Spacing.BORDER_RADIUS,
    borderTopRightRadius: Spacing.BORDER_RADIUS,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  card: {
    marginBottom: 30
  }
})

export default withScreenAnimation(withStatusBar(Profile))
