// Dependencies
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from 'react-native-elements';

// Hoooks
import { useAuth } from 'react-native-chatting';

// AuthStack
import Auth from '@app/screens/auth';

// MainStack
import ChannelList from '@app/screens/main/ChannelList';

/**
 * Stack react navigation.
 */
const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

/**
 * Defines the react native navigation for app.
 * @returns The react app navigation component.
 */
export function Navigation(): React.ReactElement {
  const { session, isInitAuth } = useAuth();
  const { theme } = React.useContext(ThemeContext);

  if (isInitAuth) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1 }}
        color={theme.colors?.primary}
      />
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        {
          session
            ? <Stack.Screen name="ChatList" component={ChannelList} options={{ headerShown: false }} />
            : <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
