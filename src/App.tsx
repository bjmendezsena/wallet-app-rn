import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './context/authContext/AuthContext';
import { MainNavigator } from './navigator/MainNavigator';
import { Navigator } from './navigator/Navigator';

interface AppStateProps {
    children: JSX.Element;
}

const AppState = ({ children }: AppStateProps) => {
    return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
    return (
        <AppState>
            <NavigationContainer>
                {/* <Navigator /> */}
                <MainNavigator />
            </NavigationContainer>
        </AppState>
    );
};

export default App;
