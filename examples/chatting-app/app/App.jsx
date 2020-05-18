// Dependencies
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatList from './screens/ChannelList';

const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
