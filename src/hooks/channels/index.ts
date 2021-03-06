// Dependencies
import { ChannelsResponse } from '@src/client/resources/channels/dto/channelsResponse';
import chatClient from '@src/client';

// Hooks
import { useFetch } from 'react-hooks-util';

/**
 * Gets the channels for current user in session.
 * @returns The response with channels.
 */
export function useChannels(): [ChannelsResponse, boolean, unknown, () => void] {
  const initialValue: ChannelsResponse = { items: [] };
  return useFetch<ChannelsResponse>(chatClient.channels.getChannels, [], initialValue);
}

export default useChannels;
