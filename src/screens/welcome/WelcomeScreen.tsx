import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../../components/atoms/Button';
import { RootStackParams } from '../../navigator/Navigator';
import theme from '../../theme/theme';
import {
    heightPercentTDp as hp,
    widthPercentTDp as wp
} from '../../utils/sizeUtils';
import { useForm } from '../../hooks/useForm';
import { LoginRequest, UserDTO } from '../../interfaces/appInterfaces';
import { AuthContext } from '../../context/authContext/AuthContext';
import { LoginForm } from '../../components/molecules/forms/LoginForm';
import { RegisterForm } from '../../components/molecules/forms/RegisterForm';

interface WelcomeScreenProps extends StackScreenProps<RootStackParams, any> {}

export const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
    const { login, authState, signIn } = useContext(AuthContext);
    const { isLoggedIn } = authState;
    const [isStartPressed, setIsStartPressed] = useState(false);
    const [bottomFlex] = useState(new Animated.Value(1));

    const [isRegisterPressed, setIsRegisterPressed] = useState(false);

    const { form, email, password, onChange, setForm } = useForm<LoginRequest>({
        email: '',
        password: ''
    });
    const {
        form: registerForm,
        email: registerEmail,
        password: registerPAssword,
        dni,
        lastName,
        name,
        onChange: onRegisterChange,
        setForm: setRegisterForm
    } = useForm<UserDTO>({
        email: '',
        password: '',
        dni: '',
        lastName: '',
        name: ''
    });

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            navigation.replace('MainNavigator');
        }
    }, [isLoggedIn]);

    const onLoginSubmit = async () => {
        if (disabled) return;
        setIsStartPressed(false);
        login({
            email,
            password
        });
        initForms();
    };

    const onRegisterSubmit = async () => {
        if (disabled) return;
        setIsStartPressed(false);
        setIsRegisterPressed(false);
        signIn(registerForm);
        initForms();
    };

    const initForms = async () => {
        setForm({
            email: '',
            password: ''
        });
        setRegisterForm({
            email: '',
            password: '',
            dni: '',
            lastName: '',
            name: ''
        });
    };

    useEffect(() => {
        let value = 1;
        if (isStartPressed) {
            value = isRegisterPressed ? 8 : 4;
        }
        Animated.timing(bottomFlex, {
            toValue: value,
            duration: 250,
            useNativeDriver: false,
            easing: Easing.linear
        }).start();
    }, [isStartPressed, isRegisterPressed]);

    useEffect(() => {
        if (!email || !password) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [form]);

    useEffect(() => {
        if (
            !registerForm ||
            !registerEmail ||
            !registerPAssword ||
            !dni ||
            !lastName ||
            !name
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [registerForm]);
    return (
        <LinearGradient colors={theme.GRADIENT_1} style={styles.container}>
            <View style={styles.topPart}>
                <Text style={styles.fisrtLetters}>WA</Text>
                <Text style={styles.secondLetters}>LLET</Text>
            </View>
            <Animated.View style={{ flex: bottomFlex }}>
                {isStartPressed ? (
                    <>
                        {isRegisterPressed ? (
                            <RegisterForm
                                disabled={disabled}
                                onChange={onRegisterChange}
                                onSubmit={onRegisterSubmit}
                                footer={
                                    <Button
                                        style={{
                                            backgroundColor:
                                                theme.GRADIENT_1[1],
                                            alignSelf: 'center',
                                            marginVertical: hp(2)
                                        }}
                                        onPress={() =>
                                            setIsRegisterPressed(false)
                                        }
                                    >
                                        <Text style={styles.buttonText}>
                                            Login
                                        </Text>
                                    </Button>
                                }
                            />
                        ) : (
                            <LoginForm
                                disabled={disabled}
                                onChange={onChange}
                                onSubmit={onLoginSubmit}
                                footer={
                                    <Button
                                        style={{
                                            backgroundColor:
                                                theme.GRADIENT_1[1],
                                            alignSelf: 'center',
                                            marginVertical: hp(2)
                                        }}
                                        onPress={() =>
                                            setIsRegisterPressed(true)
                                        }
                                    >
                                        <Text style={styles.buttonText}>
                                            Register
                                        </Text>
                                    </Button>
                                }
                            />
                        )}
                    </>
                ) : (
                    <Button
                        style={{
                            backgroundColor: theme.ORANGE,
                            alignSelf: 'center'
                        }}
                        onPress={() => setIsStartPressed(true)}
                    >
                        <Text style={styles.buttonText}>Start with us</Text>
                    </Button>
                )}
            </Animated.View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    topPart: {
        flex: 2,
        justifyContent: 'flex-end',
        paddingVertical: hp(6),
        alignItems: 'center'
    },
    fisrtLetters: {
        color: '#fff',
        letterSpacing: wp(4),
        fontSize: wp(18),
        fontFamily: theme.FONT.LIGTH
    },
    secondLetters: {
        color: theme.WHITE,
        letterSpacing: wp(2),
        fontSize: wp(12),
        fontFamily: theme.FONT.LIGTH
    },
    buttonText: {
        color: theme.WHITE,
        fontFamily: theme.FONT.REGULAR,
        letterSpacing: wp(0.5)
    }
});
