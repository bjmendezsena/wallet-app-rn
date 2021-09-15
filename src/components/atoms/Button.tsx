import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';
import theme from '../../theme/theme';

import {
    heightPercentTDp as hp,
    widthPercentTDp as wp
} from '../../utils/sizeUtils';

interface IProps {
    style?: ViewStyle;
    type?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'light'
        | 'dark';
    onPress: () => void;
    children?: JSX.Element;
    disabled?: boolean;
}

export const Button = ({
    onPress,
    style,
    type,
    children,
    disabled = false
}: IProps) => {
    const backgroundColor = type
        ? theme.BUTTON_TYPES[type]
        : theme.BUTTON_TYPES.primary;

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={{
                backgroundColor: backgroundColor,
                height: hp(5),
                width: wp(50),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: wp(5),
                ...theme.SHADOWSTYLE,
                ...style
            }}
            disabled={disabled}
            onPress={() => onPress()}
        >
            {children}
        </TouchableOpacity>
    );
};
