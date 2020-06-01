/**
 * App credentials to initialize.
 * @interface AppCredentials
 * @author Daniel Mejia
 */
export interface AppCredentials {
  /**
   * The identifier of application.
   */
  appId: number;

  /**
   * The authentication key.
   */
  authKey: string;

  /**
   * The authentication secret key.
   */
  authSecret: string;
}

/**
 * App configuration to initialize.
 * @interface AppConfig
 * @author Daniel Mejia
 */
export interface AppConfig {
  /**
   * The configuration of debug for, 1 to turn-on logs, 0 to turn-off.
   */
  debug: {
    mode: 0 | 1
  }
}
