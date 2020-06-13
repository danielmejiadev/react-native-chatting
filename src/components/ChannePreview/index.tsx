// Dependencies
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Badge } from 'react-native-elements';

// Helpers
import * as channelHelper from '@src/common/channelHelper';

// Client
import { Channel } from '@src/client/resources/channels/dto/channel';

// Styles
import styles from './styles';

/**
 * The channel items
 * @param props The properties for channel.
 * @returns The channel item.
 */
export function ChannePreview(props: Channel): React.ReactElement {
  const { lastMessage, name, lastMessageDateSent, unreadMessagesCount } = props;

  return (
    <TouchableOpacity style={styles.container}>
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

    </TouchableOpacity>
  );
}

export default React.memo(ChannePreview);
