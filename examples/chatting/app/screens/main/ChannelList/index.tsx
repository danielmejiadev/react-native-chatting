// Dependencies
import React from 'react';
import { ChannelList, useAuth } from 'react-native-chatting';
import { Button, Image, View } from 'react-native';

// Logo
import logo from '@app/assets/logo.png';

/**
 * Defines the list of channels.
 * @returns The channes list.
 */
export function ChannelListScreen(): React.ReactElement {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', height: 50 }}>
        <Image source={logo} resizeMode="contain" style={{ height: 40, width: 40 }} />
        <Button onPress={() => signOut()} title="Logout" />
      </View>
      <ChannelList emptyChat="No chats yet" />
    </View>
  );
}

export default ChannelListScreen;
