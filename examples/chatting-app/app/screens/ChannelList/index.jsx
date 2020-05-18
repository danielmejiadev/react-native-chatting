// Dependencies
import React from 'react';
import { View, Text } from 'react-native';
import { ChannelList } from 'react-native-chatting';

export function ChannelListScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Text>Home Screen</Text>
      <ChannelList />
    </View>
  );
}

export default ChannelListScreen;
