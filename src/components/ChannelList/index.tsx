// Dependencies
import React from 'react';
import { View, FlatList, ViewStyle, StyleProp, RefreshControl } from 'react-native';

// Dto
import { Channel } from '@src/client/resources/chat/channels/dto/channel';

// Hoooks
import * as ChannelHooks from '@src/hooks/channels';

// Components
import ChannelPreview, { ChannelPreviewProps } from '../ChannelPreview';
import ChannelPreviewContainer from '../ChannelPreviewContainer';
import NoItems from '../NoItems';

// Styles
import styles from './styles';

/**
 * Props definition of {@link ChannelList}
 * @interface ChannelListProps
 */
export interface ChannelListProps {
  /**
   * The styles for container.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The messages for empty chat.
   */
  emptyChat: string;

  /**
   * The callback to execute when the users selects a channel preview.
   */
  onSelect: (channel: Channel) => void;

  /**
   * The component to render as preview.
   */
  Preview: React.ReactType<ChannelPreviewProps>;
}

/**
 * Channel list component.
 * @param props The properties of component.
 * @returns The react component.
 */
export function ChannelList(props: ChannelListProps): React.ReactElement {
  const { emptyChat, onSelect } = props;
  const { Preview, containerStyle } = props;
  const [channelResponse, loading, , fetch] = ChannelHooks.useChannels();

  console.log('list');
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={fetch} />}
        data={channelResponse?.items}
        renderItem={({ item }) => (
          <ChannelPreviewContainer
            key={item.id}
            channel={item}
            Preview={Preview}
            onPress={onSelect}
          />
        )}
        keyExtractor={(channel: Channel) => channel.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoItems text={emptyChat} icon={{ type: 'material-community', name: 'message-bulleted-off', size: 80 }} />}
      />
    </View>
  );
}

/**
 * The default values for props.
 */
ChannelList.defaultProps = {
  Preview: ChannelPreview,
};

export default ChannelList;
