// Dto
import { ExternalClient } from './dto/externalClient';

/**
 * Base class for resources.
 * @class Base
 * @author Daniel Mejia
 */
export class Base {
  /**
   * The base client chat provider.
   */
  externalClient: ExternalClient;

  /**
   * Creates a instance with the base client instance.
   * @param externalClient The base client.
   */
  constructor(externalClient: ExternalClient) {
    this.externalClient = externalClient;
  }
}

export default Base;
