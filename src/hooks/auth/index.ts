// Dependencies
import React from 'react';

// Dto
import { User } from '@src/client/resources/users/dto/user';

// Context
import { AuthContext, AuthContextType } from '@src/components/ChatProvider';

/**
 * Hook to use the authentication context.
 * @returns The authentication context.
 */
export function useAuth(): AuthContextType {
  return React.useContext<AuthContextType>(AuthContext);
}

export function useCurrentUser(): User {
  const { session } = exports.useAuth();
  return session.user;
}

export default useAuth;
