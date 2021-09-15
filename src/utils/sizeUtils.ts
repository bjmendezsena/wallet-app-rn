import { Dimensions, PixelRatio } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const widthPercentTDp = (widthPercent: number) =>
    PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);

const heightPercentTDp = (heightPercent: number) =>
    PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);

export { widthPercentTDp, heightPercentTDp };
