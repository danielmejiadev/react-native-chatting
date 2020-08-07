// Dependencies
import { transform } from 'decorators-js-pack';

// Dto
import { Session, UserCredentials } from './dto/authentication';
import Base from '../../base';

// Helpers
import * as localSessionHelper from '../../helpers/localSession.helper';

/**
 * Service to manage authentication in the chat app.
 * @class Auth
 * @author Daniel Mejia
 */
export class Auth extends Base {
  /**
   * Validate the local session and auto login if present.
   * @return The local session if there's one, undefined otherwise.
   */
  @transform
  async validateSession(): Promise<Session | undefined> {
    const localCredentials = await localSessionHelper.getLocalCredentials();

    if (localCredentials) {
      const { login, password } = localCredentials;
      return this.startSession({ login, password });
    }

    return undefined;
  }

  /**
   * Start a session for given user and store a local session in protected store.
   * @param userCredentials The user credentials to start the session.
   * @returns The session started.
   */
  @transform
  async startSession(userCredentials: UserCredentials): Promise<Session> {
    const session = await this.externalClient.createSession(userCredentials);
    console.log({ userId: session.user.id, password: userCredentials.password });
    await this.externalClient.chat
      .connect({ userId: session.user.id, password: userCredentials.password });
    localSessionHelper.persistCredentials(userCredentials);
    return session;
  }

  /**
   * Clear the session even local.
   */
  async clearSession(): Promise<void> {
    await localSessionHelper.removeCredentials();
    await this.externalClient.logout();
  }
}

export default Auth;
