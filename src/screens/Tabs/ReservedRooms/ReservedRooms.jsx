import React from 'react'
import { Container } from 'native-base'
import { ScreenHeading } from 'molecules'
import { Flex, Text } from 'atoms'
import { StyleSheet, ScrollView } from 'react-native'
import { withStatusBar, withScreenAnimation } from 'utils'
import { MediumCard } from 'molecules'

const ReservedRooms = ({ rooms }) => {
  return (
    <Container>
      <ScrollView >
        <ScreenHeading title="Your Reserverd Rooms" />

        <Flex pad>
          {
            rooms.map(room => (
              <MediumCard style={styles.card} data={room} key={room.id.toString()} />
            ))
          }
        </Flex>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 30
  }
})

export default withScreenAnimation(withStatusBar(ReservedRooms))
