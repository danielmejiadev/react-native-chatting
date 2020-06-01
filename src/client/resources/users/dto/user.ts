/**
 * Chat user object.
 * @interface User
 * @author Daniel Mejia
 */
export interface User {
  /**
   * The user identifier.
   */
  id: number;

  /**
   * The user avatar.
   */
  avatar: string;

  /**
   * The user bold identifier.
   */
  blobId: null;

  /**
   * The user email.
   */
  email?: string;

  /**
   * A external identifier of user if provided.
   */
  externalUserId?: string;

  /**
   * The facebook identifier of user if connected use this provider.
   */
  facebookId?: string;

  /**
   * The user full name.
   */
  fullName: string;

  /**
   * The date of last request sent for user.
   */
  lastRequestAt: string;

  /**
   * The login of user.
   */
  login: string;

  /**
   * The phone of user.
   */
  phone?: string;

  /**
   * The twitter identifier of user if connected use this provider.
   */
  twitterId?: string

 /**
  * The website of user.
  */
  website?: string;

  /**
   * The date of updating of user.
   */
  updatedAt: string;

  /**
  * The date of creation of user.
  */
  createdAt: string;
}
