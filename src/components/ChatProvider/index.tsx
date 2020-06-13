// Dependencies
import React from 'react';

// Dtos
import { UserCredentials, Session } from '@src/client/resources/auth/dto/authentication';
import { AppCredentials, AppConfig } from '@src/client/dto/app';
import { UserCreate } from '@src/client/resources/users/dto/user.create';
import { User } from '@src/client/resources/users/dto/user';

// Chat Client
import chatClient from '../../client/client';

/**
 * Props definition of {@link AuthContext}
 * @interface AuthContextType
 */
export interface AuthContextType {
  session?: Session;
  isInitAuth: boolean;
  signIn: (userCredentials: UserCredentials) => void;
  signOut: () => void;
  signUp: (user: UserCreate) => void;
}

/**
 * Auth context.
 */
export const AuthContext = React
  .createContext<AuthContextType>({ isInitAuth: false } as AuthContextType);

/**
 * Props definition of {@link ChatProvider}
 * @interface ChatProviderProps
 */
export interface ChatProviderProps {
  children: React.ReactNode,
  credentials: AppCredentials,
  config?: AppConfig,
}

/**
 * Chat provider component.
 * @param props The properties of component.
 * @returns The chat provider.
 */
export function ChatProvider(props: ChatProviderProps): React.ReactElement {
  const { children, credentials, config } = props;
  const [session, setSession] = React.useState<Session>();
  const [isInitAuth, setInitAuth] = React.useState(false);

  React.useEffect(() => {
    setInitAuth(true);
    chatClient.init(credentials, config);
    chatClient.auth.validateSession()
      .then(setSession)
      .finally(() => setInitAuth(false));
  }, [credentials, config]);

  const { current: authContext } = React.useRef({
    /**
     * Start the user session with chat provider.
     * @param userCredentials The credentials necessary to connect.
     * @returns The session started.
     */
    async signIn(userCredentials: UserCredentials): Promise<Session> {
      const currentSession = await chatClient.auth.startSession(userCredentials);
      setSession(currentSession);
      return currentSession;
    },
    /**
     * Close the session with chat provider.
     */
    async signOut() {
      await chatClient.auth.clearSession();
      setSession(undefined);
    },
    /**
     * Register a user into the provider.
     * @param user The user to register.
     * @returns The user registered.
     */
    signUp(user: UserCreate): Promise<User> {
      return chatClient.users.create(user);
    },
  });

  return (
    <AuthContext.Provider value={{ ...authContext, session, isInitAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default ChatProvider;
