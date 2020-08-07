// Dependencies
import React from 'react';
import { TouchableOpacity } from 'react-native';

// Client
import { Channel } from '@src/client/resources/chat/channels/dto/channel';

// Dto
import { ChannelPreviewProps } from '../ChannelPreview';

/**
 * Proptypes definition for ChannelPreviewContainer
 */
export interface ChannelPreviewContainerProps {
  /**
   * The channel to display.
   */
  channel: Channel;

  /**
   * The component to render as preview.
   */
  Preview: React.ReactType<ChannelPreviewProps>;

  /**
   * The on press callback for item.
   */
  onPress: (channel: Channel) => void;
}

/**
 * The channel items
 * @param props The properties for channel.
 * @returns The channel item.
 */
export function ChannelPreviewContainer(props: ChannelPreviewContainerProps): React.ReactElement {
  const { Preview, channel, onPress } = props;
  const onSelect = React.useCallback(() => onPress(channel), [onPress, channel]);
  console.log('preview container');

  return (
    <TouchableOpacity onPress={onSelect}>
      <Preview channel={channel} />
    </TouchableOpacity>
  );
}

export default React.memo(ChannelPreviewContainer);
