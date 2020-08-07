// Dto
import { Message } from './message';

export interface MessageList {
  items: Message[];
  limit: number;
  skip: number;
}
