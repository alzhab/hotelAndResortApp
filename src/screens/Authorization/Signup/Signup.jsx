import { Flex, Text } from 'atoms'
import { InputBox, SocialButton } from 'molecules'
import { Button } from 'native-base'
import { Hero } from 'organisms'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors, Spacing } from 'styles'
import { withStatusBar } from 'utils'

const Form = () => (
  <Flex style={styles.form}>
    <Text size={30} weight="700" family="Roboto_medium" style={{ marginBottom: Spacing.WRAPPER_PADDING }}>Let's Join us</Text>

    <InputBox text="Name" keyboardType="email-address" />
    <InputBox text="Username" keyboardType="email-address" />
    <InputBox text="Email/Username" keyboardType="email-address" />
    <InputBox text="Password" />
    <InputBox text="Confirm Password" />

    <Button color="primary" rounded style={styles.formButton}>
      <Text center style={{ width: '100%' }} size={17} family="Roboto_medium">Sign Up</Text>
    </Button>

    <Flex row layout="flex-start center" style={{ marginVertical: 30 }}>
      <Text color={Colors.SECOND_TEXT} size={17} style={{ marginRight: 15 }}>Have an account?</Text>
      <TouchableOpacity>
        <Text color={Colors.INVERSE_COLOR} size={17} family="Roboto_medium">Sign In</Text>
      </TouchableOpacity>
    </Flex>

    <Flex row layout="flex-start center">
      <Text
        color={Colors.SECOND_TEXT}
        size={17}
        style={{ marginRight: 20 }}
      >Or sign up with</Text>

      <SocialButton icon="google-plus-g" color='#dd4b39' />
      <SocialButton icon="facebook-f" color='#3b5999' />
    </Flex>
  </Flex>
)


const Signup = () => {
  return (
    <ScrollView>
      <Hero
        cover
        height={Spacing.DeviceHeight * 0.5}
        image={require('assets/images/signUpHero.jpg')}
        style={{ marginBottom: 30 }}
      />

      <Flex pad style={{ marginTop: -150 }}>
        <Form />
      </Flex>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: Spacing.WRAPPER_PADDING,
    paddingHorizontal: Spacing.WRAPPER_PADDING,
    borderRadius: Spacing.BORDER_RADIUS,
    marginBottom: 100
  },
  formButton: {
    width: '100%',
    textAlign: 'center',
    height: 40,
    marginTop: 25,
  },
})

export default withStatusBar(Signup, 'transparent', 'light-content')
