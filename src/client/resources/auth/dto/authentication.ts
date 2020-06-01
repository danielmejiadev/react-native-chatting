// Dto
import { User } from '../../users/dto/user';

/**
 * User credentials for authentication.
 * @interface UserCredentials
 * @author Daniel Mejia
 */
export interface UserCredentials {
  /**
   * The login data.
   */
  login: string;

  /**
   * The password to authentication user.
   */
  password: string;
}

/**
 * Chat session object.
 * @interface Session
 * @author Daniel Mejia
 */
export interface Session {
  /**
   * The identifier of session.
   */
  id: number,

  /**
   * The idenfier of application owner of session.
   */
  applicationId: number,

  /**
   * The data of creation of session.
   */
  createdAt: string;

  /**
   * The nonce of session.
   */
  nonce: number;

  /**
   * The token of session.
   */
  token: string;

  /**
   * The ts of session.
   */
  ts: number,

  /**
   * The date of updating of session.
   */
  updatedAt: string;

  /**
   * The user who starts the session.
   */
  user: User;
}
