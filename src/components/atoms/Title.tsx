import React from 'react';
import { Text, ViewStyle } from 'react-native';
import theme from '../../theme/theme';

import {
    heightPercentTDp as hp,
    widthPercentTDp as wp
} from '../../utils/sizeUtils';

interface IProps {
    text: string;
    style?: ViewStyle;
}

export const Title = ({ text, style }: IProps) => {
    return (
        <Text
            style={{
                textAlign: 'center',
                marginVertical: hp(1),
                color: theme.BLACK,
                fontSize: wp(8),
                letterSpacing: wp(0.1),
                fontFamily: 'Montserrat',
                ...theme.SHADOWSTYLE,
                ...style
            }}
        >
            {text}
        </Text>
    );
};
