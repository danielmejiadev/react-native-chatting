// Dependencies
import ConnectyCube from 'react-native-connectycube';

// Under test
import client from '../client';

/**
 * @file client.spec.js
 * @author Daniel Mejia
 * @description Test file chat.
 */
describe('Client Chat', () => {
  it('should init client', async () => {
    const appCredentials = {
      appId: 1,
      authSecret: 'dasdsa',
      authKey: 'adsa',
    };
    jest.spyOn(ConnectyCube, 'init').mockImplementation();

    client.init(appCredentials);
    expect(ConnectyCube.init).toHaveBeenCalledWith(appCredentials, undefined);
  });
});
