import React, { useRef } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigationState } from '@react-navigation/native'

const withScreenAnimation = (Component) => {
  return (props) => {
    const animView = useRef(null)
    React.useEffect(() => {

      const unsubscribe = props.navigation.addListener('tabPress', () => {
        const history = props.navigation.dangerouslyGetState().history
        const lastKey = history[history.length - 1].key

        if (lastKey !== props.route.key) {
          animView.current.slideInDown(0)
        }
      });

      return unsubscribe;
    }, [props.navigation]);

    return (
      <Animatable.View useNativeDriver={true} ref={animView} style={{ flex: 1 }} >
        <Component {...props} />
      </Animatable.View>
    )
  }
}

export default withScreenAnimation