import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../../theme/theme';
import {
    heightPercentTDp as hp,
    widthPercentTDp as wp
} from '../../../utils/sizeUtils';
import { Button } from '../../atoms/Button';
import { CustomTextInput } from '../../atoms/CustomTextInput';
import { Title } from '../../atoms/Title';
import { ForomProps } from './formInterfaces';
import { LoginRequest } from '../../../interfaces/appInterfaces';

interface IProps extends ForomProps {
    onChange: (value: string, field: keyof LoginRequest) => void;
}

export const LoginForm = ({ onChange, disabled, onSubmit, footer }: IProps) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.WHITE,
                borderTopLeftRadius: wp(20)
            }}
        >
            <Title text="LOGIN" style={{ alignSelf: 'center' }} />
            <CustomTextInput
                placeHolder="Email"
                type="email-address"
                onChange={(value) => onChange(value, 'email')}
            />
            <CustomTextInput
                placeHolder="Password"
                isSecretText
                onChange={(value) => onChange(value, 'password')}
            />
            <Button
                style={{
                    backgroundColor: disabled
                        ? theme.BUTTON_TYPES.disabled
                        : theme.ORANGE,
                    alignSelf: 'center'
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
                    Login
                </Text>
            </Button>
            {footer}
        </View>
    );
};
