// Dependencies
import autobind from 'autobind-decorator';
import { transform } from 'decorators-js-pack';

// Dtos
import Base from '../../../base';
import { ChannelsResponse } from './dto/channelsResponse';
import { Channel } from './dto/channel';
import { CreateChannelParams } from './dto/createChannelParams';

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
  list(): Promise<ChannelsResponse> {
    return this.externalClient.chat.dialog.list();
  }

  @transform
  create(params: CreateChannelParams): Promise<Channel> {
    return this.externalClient.chat.dialog.create(params);
  }
}

export default Channels;
