// Dependencies
import { transform } from 'decorators-js-pack';

// Dtos
import { UserCreate } from './dto/user.create';
import { User } from './dto/user';
import Base from '../../base';

/**
 * Manage the users of chat.
 * @class Users
 * @author Daniel Mejia
 */
export class Users extends Base {
  /**
   * Creates the user into the service.
   * @param user The user to create.
   * @returns The user created.
   */
  @transform
  async create(user: UserCreate): Promise<User> {
    await this.externalClient.createSession();
    return this.externalClient.users.signup(user);
  }
}

export default Users;
