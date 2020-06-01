// Dtos
import { ExternalClient } from '@src/client/dto/externalClient';

// Under test
import Chat from '../index';

/**
 * @file index.spec.js
 * @author Daniel Mejia
 * @description Test file cht resource.
 */
describe('Channels Resource', () => {
  const chatClient = { connect: jest.fn() };
  const externalClient = { chat: chatClient } as unknown as ExternalClient;
  const chat = new Chat(externalClient);

  it('should connect to chat service', async () => {
    const chatCredential = {
      userId: 122,
      password: 'daslkdas',
    };
    jest.spyOn(chatClient, 'connect').mockResolvedValue(undefined);

    await chat.connect(chatCredential);
    expect(chatClient.connect).toHaveBeenCalledWith(chatCredential);
  });
});
