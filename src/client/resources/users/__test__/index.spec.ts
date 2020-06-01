// Dtos
import { ExternalClient } from '@src/client/dto/externalClient';
import { Session } from '../../auth/dto/authentication';

// Under test
import Users from '../index';

/**
 * @file index.spec.js
 * @author Daniel Mejia
 * @description Test file users resource.
 */
describe('Users Resource', () => {
  const usersClient = { signup: jest.fn() };
  const externalClient = {
    users: usersClient,
    createSession: jest.fn(),
  } as unknown as ExternalClient;
  const users = new Users(externalClient);

  it('should create user', async () => {
    const userCreate = {
      login: 'dsad',
      password: 'dasdas',
    };
    const user = { ...userCreate };
    const session = {} as Session;
    jest.spyOn(usersClient, 'signup').mockResolvedValue(user);
    jest.spyOn(externalClient, 'createSession').mockResolvedValue(session);

    const response = await users.create(userCreate);
    expect(response).toEqual(user);
    expect(externalClient.createSession).toHaveBeenCalled();
  });
});
