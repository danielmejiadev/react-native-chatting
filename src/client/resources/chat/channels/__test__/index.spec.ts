// Dtos
import { ExternalClient } from '../../../../dto/externalClient';

// Under test
import Channels from '../index';

/**
 * @file index.spec.js
 * @author Daniel Mejia
 * @description Test file channel resource.
 */
describe('Channels Resource', () => {
  const dialogClient = { list: jest.fn() };
  const chatClient = { dialog: dialogClient };
  const externalClient = { chat: chatClient } as unknown as ExternalClient;
  const channels = new Channels(externalClient);

  it('should get channels list', async () => {
    const channelResponse = {
      items: [],
    };
    jest.spyOn(dialogClient, 'list').mockResolvedValue(channelResponse);

    const response = await channels.getChannels();
    expect(response).toEqual(channelResponse);
  });
});
