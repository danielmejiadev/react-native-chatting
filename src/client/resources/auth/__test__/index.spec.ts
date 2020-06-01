// Helpers
import * as localSessionHelper from '../../../helpers/localSession.helper';

// Dtos
import { ExternalClient } from '../../../dto/externalClient';
import { Session } from '../dto/authentication';

// Under test
import Auth from '../index';

/**
 * @file index.spec.js
 * @author Daniel Mejia
 * @description Test file auth resource.
 */
describe('Auth Resource', () => {
  const externalClient = {
    createSession: jest.fn(),
    logout: jest.fn(),
  } as unknown as ExternalClient;
  const auth = new Auth(externalClient);

  it('should start session', async () => {
    const userCrendential = { login: '123', password: 'password' };
    const session = {} as Session;
    jest.spyOn(externalClient, 'createSession').mockResolvedValue(session);
    jest.spyOn(localSessionHelper, 'persistCredentials').mockImplementation();

    const response = await auth.startSession(userCrendential);
    expect(response).toEqual(session);
    expect(localSessionHelper.persistCredentials).toHaveBeenCalledWith(userCrendential);
  });

  it('should clear session', async () => {
    jest.spyOn(localSessionHelper, 'removeCredentials').mockImplementation();

    await auth.clearSession();
    expect(externalClient.logout).toHaveBeenCalled();
    expect(localSessionHelper.removeCredentials).toHaveBeenCalled();
  });

  describe('should get local session', () => {
    it('do no exist local session', async () => {
      jest.spyOn(localSessionHelper, 'getLocalCredentials').mockResolvedValue(undefined);
      const response = await auth.validateSession();
      expect(response).toBeUndefined();
    });

    it('exist local session', async () => {
      const userCrendential = { login: '123', password: 'password' };
      const session = {} as Session;
      jest.spyOn(localSessionHelper, 'getLocalCredentials').mockResolvedValue(userCrendential);
      jest.spyOn(auth, 'startSession').mockResolvedValue(session);

      const response = await auth.validateSession();
      expect(response).toEqual(session);
    });
  });
});
