// Dependencies
import ReactNativeSensitiveInfo from 'react-native-sensitive-info';

/**
 * @file authHelper.js
 * @author Daniel Mejia
 * @description Auth helper functions.
 */

/**
 * Auth state key for storage.
 */
export const SESSION_KEY = 'SESSION_KEY';

export interface LocalCredentials {
  login: string;
  password: string;
}

/**
 * Persist the local session of chat.
 * @returns An empty promise.
 */
export function persistCredentials(credentials: LocalCredentials): Promise<null> {
  return ReactNativeSensitiveInfo.setItem(SESSION_KEY, JSON.stringify(credentials), {});
}

/**
 * Removes the local session of chat.
 * @returns An empty promise.
 */
export function removeCredentials(): Promise<null> {
  return ReactNativeSensitiveInfo.deleteItem(SESSION_KEY, {});
}

/**
 * Gets the local session of chat.
 * @returns The local session.
 */
export async function getLocalCredentials(): Promise<LocalCredentials | undefined> {
  const session = await ReactNativeSensitiveInfo.getItem(SESSION_KEY, {});
  return session ? JSON.parse(session) : undefined;
}
