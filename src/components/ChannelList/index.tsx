// Dependencies
import React from 'react';
import { View, FlatList, ViewStyle, StyleProp, RefreshControl } from 'react-native';

// Dto
import { Channel } from '@src/client/resources/channels/dto/channel';

// Hoooks
import * as ChannelHooks from '@src/hooks/channels';

// Components
import ChannePreview from '../ChannePreview';
import NoItems from '../NoItems';

// Styles
import styles from './styles';

/**
 * Props definition of {@link ChannelList}
 * @interface ChannelListProps
 */
export interface ChannelListProps {
  containerStyle?: StyleProp<ViewStyle>;
  emptyChat: string;
}

/**
 * Channel list component.
 * @param props The properties of component.
 * @returns The react component.
 */
export function ChannelList(props: ChannelListProps): React.ReactElement {
  const { containerStyle, emptyChat } = props;
  const [channelResponse, loading,, fetch] = ChannelHooks.useChannels();

  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetch} />}
        data={channelResponse?.items}
        renderItem={({ item: channel }) => (
          <ChannePreview
            id={channel.id}
            lastMessage={channel.lastMessage}
            name={channel.name}
            lastMessageDateSent={channel.lastMessageDateSent}
            unreadMessagesCount={channel.unreadMessagesCount}
          />
        )}
        keyExtractor={(channel: Channel) => channel.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoItems text={emptyChat} icon={{ type: 'material-community', name: 'message-bulleted-off', size: 80 }} />}
      />
    </View>
  );
}

export default ChannelList;
