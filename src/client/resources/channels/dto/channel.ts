/**
 * The channel object representation.
 * @interface Channel
 * @author Daniel Mejia
 */
export interface Channel {
  /**
   * The identifier of channel.
   */
  id: string;

  /**
   * The last message sent on chat.
   */
  lastMessage: string;
}
