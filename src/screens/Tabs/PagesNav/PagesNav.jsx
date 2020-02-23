import React from 'react'
import { Container, View, Text, List, ListItem, Header, Content, Icon, Left, Right } from 'native-base'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { ScreenHeading } from 'molecules'
import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from 'styles'
import { withStatusBar, withScreenAnimation } from 'utils'

const PagesNav = ({ links }) => {
  const navigation = useNavigation()

  return (
    <>
      <Container>
        <ScreenHeading title="Pages" />
        <List>
          {
            links.map(item => (
              <ListItem key={item.title} onPress={() => item.route ? navigation.navigate(item.route) : item.event} style={styles.listItem}>
                <Left style={{ alignItems: 'center' }}>
                  <View style={styles.iconLeft}>
                    <Icon name={item.icon} type="Feather" style={{ fontSize: 15, color: Colors.INVERSE_COLOR }} />
                  </View>
                  <Text>{item.title}</Text>
                </Left>
                <Right>
                  <Icon name="chevron-right" type="Feather" />
                </Right>
              </ListItem>
            ))
          }
        </List>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 0,
    paddingBottom: 0,
    paddingTop: 5,
    paddingBottom: 5
  },
  iconLeft: {
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    marginRight: 15,
  }
})

export default withScreenAnimation(withStatusBar(PagesNav))
