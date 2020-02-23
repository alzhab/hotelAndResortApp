import React from 'react'
import { KeyboardAvoidingView, StatusBar, StyleSheet, ScrollView } from 'react-native'

import { Flex, Text } from 'atoms'
import { SmallCard, HomeHero, MediumCard, InputBox } from 'molecules'
import { AvailabilityForm, HorizontalList } from 'organisms'

import { Spacing, Colors } from 'styles'
import { withStatusBar, withScreenAnimation } from 'utils'
import { Button } from 'native-base'

const EmailSubscribeForm = () => (
  <Flex layout="center center" style={styles.emailSubscribeForm}>
    <Text
      weight="700"
      size={20}
      color={Colors.HEADING_TEXT}
      style={{ marginBottom: 10 }}
    >Newsletter</Text>

    <Text
      weight="300"
      size={15}
      color="#666666"
      style={{ marginBottom: 20 }}
    >Enter you email to recieive newsletters</Text>

    <InputBox text="Enter Your Email" back="#fff" keyboardType="email-address" />

    <Button style={{ paddingHorizontal: 15, height: 40, marginTop: 15 }} rounded color="primary"><Text weight="700">Send</Text></Button>
  </Flex>
)

const Home = ({ categories, selectList, services, favorites }) => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      <KeyboardAvoidingView>
        <ScrollView>
          <HomeHero />
          <Flex pad>
            <AvailabilityForm selectList={selectList} style={{ marginTop: -70 }} />
          </Flex>

          <HorizontalList
            scrollStyle={styles.horizontalList}
            list={categories}
            title="Categories"
            Card={SmallCard}
            style={styles.smallCard}
            snapInterval={150}
            isCategory
            pad
          />

          <HorizontalList
            scrollStyle={styles.horizontalList}
            list={favorites}
            title="Favorite Rooms"
            Card={MediumCard}
            style={styles.mediumCard}
            snapInterval={Spacing.DeviceWidth - Spacing.WRAPPER_PADDING * 3}
            isCategory
          />

          <HorizontalList
            scrollStyle={styles.horizontalList}
            list={services}
            title="Our Services"
            Card={SmallCard}
            style={styles.smallCard}
            snapInterval={150}
            isCategory
            pad
          />

          <Flex pad>
            <EmailSubscribeForm />
          </Flex>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
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
    marginHorizontal: Spacing.WRAPPER_PADDING
  },
  emailSubscribeForm: {
    backgroundColor: '#d0d7f2',
    paddingHorizontal: Spacing.WRAPPER_PADDING,
    paddingTop: 50,
    paddingBottom: Spacing.WRAPPER_PADDING,
    borderRadius: Spacing.BORDER_RADIUS / 2
  }
})

export default withScreenAnimation(withStatusBar(Home, 'transparent', 'light-content'))
