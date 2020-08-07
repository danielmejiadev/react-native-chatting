// Dto
import { Channel } from '@src/client/resources/chat/channels/dto/channel';

/**
 * The channels response.
 * @interface ChannelsResponse
 * @author Daniel Mejia
 */
export interface ChannelsResponse {
  /**
   * The list of channels.
   */
  items: Channel[];
}
