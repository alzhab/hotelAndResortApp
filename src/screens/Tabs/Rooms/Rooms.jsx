import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container } from 'native-base'

import { SmallCard, MediumCard, ScreenHeading } from 'molecules'
import { HorizontalList } from 'organisms'

import { withStatusBar, withScreenAnimation } from 'utils'
import { Spacing } from 'styles'
import { ScrollView } from 'react-native-gesture-handler'

const Rooms = ({ popular, luxury, discovery }) => {
  return (
    <Container>
      <ScrollView>

        <ScreenHeading title="Discover" />

        <HorizontalList
          scrollStyle={styles.horizontalList}
          list={discovery}
          Card={MediumCard}
          style={styles.mediumCard}
          snapInterval={Spacing.DeviceWidth - Spacing.WRAPPER_PADDING * 4}
          isBig
          pad />

        <HorizontalList
          scrollStyle={styles.horizontalList}
          list={popular}
          title="Popular Rooms"
          Card={SmallCard}
          style={styles.smallCard}
          snapInterval={150}
          isPrice
          pad />

        <HorizontalList
          scrollStyle={styles.horizontalList}
          list={luxury}
          title="Luxury Rooms"
          Card={SmallCard}
          style={styles.smallCard}
          snapInterval={150}
          isPrice
          pad />
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  horizontalList: {
    marginBottom: 30,
  },
  smallCard: {
    width: 150,
    marginRight: Spacing.WRAPPER_PADDING
  },
  mediumCard: {
    width: Spacing.DeviceWidth - Spacing.WRAPPER_PADDING * 5,
    marginRight: Spacing.WRAPPER_PADDING
  },
})

export default withScreenAnimation(withStatusBar(Rooms))
