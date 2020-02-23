import { scaleSize } from './mixins';
import { Dimensions } from 'react-native';

export const SCALE_18 = scaleSize(18);

export const WRAPPER_PADDING = scaleSize(15)
export const BORDER_RADIUS = scaleSize(30)


export const DeviceHeight = Dimensions.get('window').height
export const DeviceWidth = Dimensions.get('window').width

export const TOOLBAR_HEIGHT = 56