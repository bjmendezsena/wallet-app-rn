import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../../theme/theme';
import { ForomProps } from './formInterfaces';
import { Title } from '../../atoms/Title';
import {
    heightPercentTDp as hp,
    widthPercentTDp as wp
} from '../../../utils/sizeUtils';
import { CustomTextInput } from '../../atoms/CustomTextInput';
import { Button } from '../../atoms/Button';
import { UserDTO } from '../../../interfaces/appInterfaces';

interface IProps extends ForomProps {
    onChange: (value: string, field: keyof UserDTO) => void;
}
export const RegisterForm = ({
    onChange,
    disabled,
    onSubmit,
    footer
}: IProps) => {
    const inputStyle = {
        marginVertical: hp(1)
    };
    const buttonStyle = {
        marginVertical: hp(3)
    };
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.WHITE,
                borderTopLeftRadius: wp(20)
            }}
        >
            <Title text="REGISTER" style={{ alignSelf: 'center' }} />
            <CustomTextInput
                placeHolder="DNI"
                onChange={(value) => onChange(value, 'dni')}
                style={inputStyle}
            />
            <CustomTextInput
                placeHolder="Name"
                onChange={(value) => onChange(value, 'name')}
                style={inputStyle}
            />
            <CustomTextInput
                placeHolder="Lastname"
                onChange={(value) => onChange(value, 'lastName')}
                style={inputStyle}
            />
            <CustomTextInput
                placeHolder="Password"
                isSecretText
                onChange={(value) => onChange(value, 'password')}
                style={inputStyle}
            />
            <CustomTextInput
                placeHolder="Email"
                type="email-address"
                onChange={(value) => onChange(value, 'email')}
                style={inputStyle}
            />

            <Button
                style={{
                    backgroundColor: disabled
                        ? theme.BUTTON_TYPES.disabled
                        : theme.ORANGE,
                    alignSelf: 'center',
                    ...buttonStyle
                }}
                onPress={onSubmit}
                disabled={disabled}
            >
                <Text
                    style={{
                        color: theme.WHITE,
                        fontFamily: theme.FONT.REGULAR,
                        letterSpacing: wp(0.5)
                    }}
                >
                    Register
                </Text>
            </Button>
            {footer}
        </View>
    );
};
