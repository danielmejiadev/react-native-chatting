// Dependencies
import ConnectyCube from 'react-native-connectycube';

// Dto
import { AppCredentials, AppConfig } from './dto/app';

// Resources
import { Auth } from './resources/auth';
import { Channels } from './resources/chat/channels';
import { Chat } from './resources/chat';
import { Users } from './resources/users';

/**
 * Client resource to manage operations.
 * @class Client
 * @author Daniel Mejia
 */
export class Client {
  /**
   * The authentication resource for operation related with sessions.
   */
  auth!: Auth;

  /**
   * The chat resource to manage operations with a chat.
   */
  chat!: Chat;

  /**
   * The users resourece to control and manage the users into the client.
   */
  users!: Users;

  /**
   * Initialize the client and resources with given credentials.
   * @param credentials The crendetials to start the client.
   * @param config The extra config params to customize the client behaviour.
   */
  init(credentials: AppCredentials, config?: AppConfig): void {
    ConnectyCube.init(credentials, config);
    this.auth = new Auth(ConnectyCube);
    this.chat = new Chat(ConnectyCube);
    this.users = new Users(ConnectyCube);
  }
}

export default new Client();
