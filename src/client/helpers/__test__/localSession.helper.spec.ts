// Dependencies
import ReactNativeSensitiveInfo from 'react-native-sensitive-info';

// Dtos
import { UserCredentials } from '../../resources/auth/dto/authentication';

// Under test
import * as authHelper from '../localSession.helper';

/**
 * @file authHelper.spec.js
 * @author Daniel Mejia
 * @description Test file auth helper.
 */
describe('AuthHelper', () => {
  const mockSensitive = <jest.Mocked<typeof ReactNativeSensitiveInfo>>ReactNativeSensitiveInfo;

  it('should saves the local session', () => {
    const session = {} as UserCredentials;
    authHelper.persistCredentials(session);
    expect(mockSensitive.setItem)
      .toHaveBeenCalledWith(authHelper.SESSION_KEY, JSON.stringify(session), {});
  });

  it('should remove the local session', () => {
    authHelper.removeCredentials();
    expect(ReactNativeSensitiveInfo.deleteItem).toHaveBeenCalledWith(authHelper.SESSION_KEY, {});
  });

  describe('should get local session', () => {
    it('not found local', async () => {
      mockSensitive.getItem.mockResolvedValue('');

      const response = await authHelper.getLocalCredentials();
      expect(response).toBeUndefined();
      expect(ReactNativeSensitiveInfo.getItem).toHaveBeenCalledWith(authHelper.SESSION_KEY, {});
    });

    it('found', async () => {
      const session = '{ "user": "1" }';
      mockSensitive.getItem.mockResolvedValue(session);

      const response = await authHelper.getLocalCredentials();
      expect(response).toEqual(JSON.parse(session));
      expect(ReactNativeSensitiveInfo.getItem).toHaveBeenCalledWith(authHelper.SESSION_KEY, {});
    });
  });
});
