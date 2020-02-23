import React from 'react'
import Flex from '../atoms/Flex'
import Text from '../atoms/Text'
import { Colors } from 'styles'

const DataList = ({ statistic }) => {
  return (
    <Flex row layout="space-around center" style={{ paddingVertical: 30, flex: 1 }}>
      {
        statistic.map((item) => (
          <Flex layout="center center" key={item.label}>
            <Text
              family="Roboto_medium"
              weight="700"
              size={27}
              color={Colors.HEADING_TEXT}>
              {item.data}
            </Text>
            <Text
              color={Colors.SECOND_TEXT}
              size={15}
              style={{ marginTop: 5 }}>
              {item.label}
            </Text>
          </Flex>
        ))
      }
    </Flex>
  )
}

export default DataList
