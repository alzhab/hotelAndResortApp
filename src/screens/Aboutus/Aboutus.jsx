import { Flex, Text } from 'atoms'
import { DataList } from 'molecules'
import { Body, Container, Header, Icon, Left } from 'native-base'
import { Hero } from 'organisms'
import React, { useRef } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Colors, Spacing } from 'styles'
import { withStatusBar } from 'utils'

const Aboutus = ({ navigation, statistic }) => {
  const headerAnimRef = useRef(null)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      headerAnimRef.current.slideInDown()
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Container>
      <Animatable.View duration={500} useNativeDriver={true} ref={headerAnimRef} style={{ width: '100%', position: 'relative', zIndex: 2 }} >
        <Header>
          <Left style={{ position: 'absolute', left: Spacing.WRAPPER_PADDING, zIndex: 2 }}>
            <TouchableOpacity transparent onPress={navigation.goBack}>
              <Icon name='arrow-back' style={{ color: Colors.MAIN_TEXT }} />
            </TouchableOpacity>
          </Left>
          <Body style={{ alignItems: 'center' }}>
            <Text family="Roboto_medium" weight="700" size={18} style={{ width: '100%' }} center>About Us</Text>
          </Body>
        </Header>
      </Animatable.View>

      <ScrollView style={{ marginTop: Spacing.TOOLBAR_HEIGHT * -1, position: 'relative' }}>
        <Hero withButton={false} image={require('assets/images/aboutusHero.jpg')} style={{ marginBottom: 30 }} />

        <Flex pad >
          <Text weight="500" family="Roboto_medium" size={19} color='#666666'>
            HELLO !
          </Text>

          <Text weight="700" family="Roboto_medium" size={30} color={Colors.INVERSE_COLOR} style={{ marginBottom: 15 }}>
            Welcome to our Hotel
          </Text>

          <Text size={15} color="#666" style={{ lineHeight: 25 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste molestias, vero accusamus illum enim fugit ipsam atque quidem nulla perferendis!
            {"\n"}
            {"\n"}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati asperiores rerum eveniet praesentium laborum, voluptatem ipsam eos vitae dicta consectetur earum! Dolore laborum recusandae eligendi, rerum sequi explicabo officiis rem.
          </Text>

        </Flex>

        <DataList statistic={statistic} />

        <Flex pad style={{ paddingBottom: 30 }}>
          <Text size={15} color="#666" style={{ lineHeight: 25 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste molestias, vero accusamus illum enim fugit ipsam atque quidem nulla perferendis!
          </Text>
        </Flex>
      </ScrollView>
    </Container>
  )
}

export default withStatusBar(Aboutus, 'transparent', 'dark-content', false)
