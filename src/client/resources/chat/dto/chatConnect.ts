/**
 * The credential to connect a user to a chat.
 * @interface Channel
 * @author Daniel Mejia
 */
export interface ChatConnect {
  /**
   * The user identifier to connect.
   */
  userId: number;

  /**
   * The credentials of user to connect.
   */
  password: string;
}
