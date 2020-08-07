/**
 * The params to create a channel.
 * @author Daniel Mejia
 */
export interface CreateChannelParams {
  type: number;
  occupantsIds?: number[];
  name?: string;
  description?: string;
  photo?: string;
}
