// Dependencies
import React from 'react';

// Context
import { AuthContext, AuthContextType } from '@src/components/ChatProvider';

/**
 * Hook to use the authentication context.
 * @returns The authentication context.
 */
export function useAuth(): AuthContextType {
  return React.useContext<AuthContextType>(AuthContext);
}

export default useAuth;
