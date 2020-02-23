import React from 'react'
import { Flex } from 'atoms'
import { ScreenHeading } from 'molecules'
import { FlatList } from 'react-native'


const HorizontalList = ({ list, title, Card, pad = false, snapInterval, scrollStyle, ...props }) => {
  return (
    <>
      {
        title && <ScreenHeading title={title} noSpace style={{ paddingTop: 0 }} />
      }
      <Flex row style={scrollStyle} pad={pad}>
        <FlatList
          snapToInterval={snapInterval}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Card data={item} {...props} />
          )} />
      </Flex>
    </>
  )
}

export default HorizontalList
