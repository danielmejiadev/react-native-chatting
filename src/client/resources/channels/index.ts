// Dependencies
import autobind from 'autobind-decorator';
import { transform } from 'decorators-js-pack';

// Dtos
import { ChannelsResponse } from './dto/channelsResponse';
import Base from '../../base';

/**
 * Service to manage the channels of session chat.
 * @class Channels
 * @author Daniel Mejia
 */
@autobind
export class Channels extends Base {
  /**
   * Gets the list of channels for the current user.
   * @returns The channels response.
   */
  @transform
  getChannels(): Promise<ChannelsResponse> {
    return this.externalClient.chat.dialog.list();
  }
}

export default Channels;
