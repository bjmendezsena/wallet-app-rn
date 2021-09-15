import React from 'react';
import {
    KeyboardTypeOptions,
    StyleSheet,
    Text,
    TextInput,
    View,
    ViewStyle
} from 'react-native';
import theme from '../../theme/theme';
import {
    heightPercentTDp as hp,
    widthPercentTDp as wp
} from '../../utils/sizeUtils';

interface IProps {
    placeHolder?: string;
    style?: ViewStyle;
    type?: KeyboardTypeOptions;
    isSecretText?: boolean;
    onChange: (value: string) => void;
}

export const CustomTextInput = ({
    style,
    placeHolder = '',
    type = 'default',
    isSecretText = false,
    onChange
}: IProps) => {
    return (
        <TextInput
            style={{
                borderRadius: wp(8),
                width: wp(70),
                height: hp(6),
                backgroundColor: theme.GRADIENT_OPACITY,
                alignSelf: 'center',
                textAlign: 'center',
                marginVertical: hp(2),
                fontFamily: theme.FONT.LIGTH,
                fontSize: wp(4),
                letterSpacing: wp(0.1),
                color: theme.BLACK,
                ...theme.SHADOWSTYLE,
                shadowOffset: {
                    width: 0,
                    height: 6
                },
                shadowRadius: 10,
                shadowOpacity: 0.8,
                shadowColor: theme.GRADIENT_1[0],
                ...style
            }}
            onChangeText={onChange}
            placeholder={placeHolder}
            keyboardType={type}
            secureTextEntry={isSecretText}
            placeholderTextColor={theme.WHITE}
        />
    );
};
