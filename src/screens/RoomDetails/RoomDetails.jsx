import React from 'react'
import { Container, Icon } from 'native-base';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  Image
} from 'react-native';

import { Spacing, Colors } from 'styles';
import { withStatusBar } from 'utils';

import { Flex, Text } from 'atoms'
import { Facility } from 'molecules';
import { AvailabilityForm, Hero } from 'organisms';

const Heading = ({ title }) => (
  <Text weight="700" size={20} style={{ marginBottom: 15 }}>{title}</Text>
)

const Info = () => (
  <Flex row layout="space-between flex-start" pad style={styles.row}>
    <Flex>
      <Text family="Roboto_medium" size={23} style={{ marginBottom: 10 }}>Single Rooms</Text>
      <Flex row layout="flex-start center">
        {
          [0, 0, 0, 0, 0].map((item, index) => (
            <Icon
              type="MaterialIcons"
              name="star"
              key={index.toString()}
              style={{ fontSize: 18, color: Colors.SECOND_PRIMARY }}
            />
          ))
        }
        <Text color={Colors.SECOND_TEXT} style={{ marginLeft: 15 }} size={15}>(120)</Text>
      </Flex>
    </Flex>

    <Flex layout="flex-end flex-end">
      <Text size={23} weight="700" style={{ marginBottom: 10 }}>$125</Text>
      <Text color={Colors.SECOND_TEXT} style={{ marginLeft: 15 }} size={14}>Per night</Text>
    </Flex>
  </Flex>
)

const Row = ({ title, children }) => (
  <Flex style={styles.facilities} pad style={styles.row}>
    <Heading title={title} />

    {children}
  </Flex>
)

const RoomDetails = ({ selectList, facilities }) => {
  return (
    <Container>
      <ScrollView>
        <Hero cover image={require('assets/images/room.jpg')} style={{ marginBottom: 30 }} />

        <Info />

        <Row title="Facilities">
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={facilities}
            horizontal
            renderItem={({ item, index }) => <Facility label={item.label} icon={item.icon} key={item.label} />}
            keyExtractor={(item, index) => index}
          />
        </Row>

        <Row title="Room Details">
          <Text color={Colors.SECOND_TEXT} size={15} style={{ lineHeight: 25 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum minus fuga omnis. Officiis nisi voluptas ullam, accusamus harum eos repellat.
          </Text>
        </Row>

        <Row title="Gallery">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} snapToInterval={195}>
            <Image style={styles.gallerySlide} source={require('assets/images/room.jpg')} />
            <Image style={styles.gallerySlide} source={require('assets/images/room.jpg')} />
            <Image style={styles.gallerySlide} source={require('assets/images/room.jpg')} />
            <Image style={styles.gallerySlide} source={require('assets/images/room.jpg')} />
          </ScrollView>
        </Row>

        <Row title="Quick Reservation">
          <AvailabilityForm selectList={selectList} style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }} />
        </Row>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  row: {
    paddingBottom: 30
  },
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
  gallerySlide: {
    height: 130,
    width: 180,
    borderRadius: Spacing.BORDER_RADIUS / 1.5,
    marginRight: 15
  }
})

export default withStatusBar(RoomDetails, 'transparent', 'light-content')
