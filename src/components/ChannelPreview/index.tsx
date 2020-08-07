// Dependencies
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

// Helpers
import * as channelHelper from '@src/common/channelHelper';

// Client
import { Channel } from '@src/client/resources/chat/channels/dto/channel';

// Styles
import styles from './styles';

/**
 * Proptypes definition for ChannelPreview
 */
export interface ChannelPreviewProps {
  channel: Channel;
}

/**
 * The channel items
 * @param props The properties for channel.
 * @returns The channel item.
 */
export function ChannelPreview(props: ChannelPreviewProps): React.ReactElement {
  const { channel } = props;
  const { lastMessage, name, lastMessageDateSent, unreadMessagesCount } = channel;
  console.log('preview item');

  return (
    <View style={styles.container}>
      <Avatar size="medium" rounded source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} />
      <View style={styles.contentContainer}>
        <View style={styles.titlesContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{name}</Text>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.subtitle, styles.paddingTop]}>{lastMessage}</Text>
        </View>
        <View>
          <Text>{channelHelper.formatPreviewDate(lastMessageDateSent * 1000)}</Text>
          {
            unreadMessagesCount > 0 && (
              <Badge
                value={unreadMessagesCount}
                containerStyle={styles.paddingTop}
              />
            )
          }
        </View>
      </View>
    </View>
  );
}

export default React.memo(ChannelPreview);
