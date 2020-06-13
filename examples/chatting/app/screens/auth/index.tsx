// Dependencies
import React from 'react';
import { KeyboardAvoidingView, View, Image, Platform, Text, TouchableOpacity } from 'react-native';
import { useAsyncCallback, useAuth } from 'react-native-chatting';

// App logo
import logo from '@app/assets/logo.png';

// Containers
import AuthForm from '@app/containers/AuthForm';

// Styles
import styles from './styles';

/**
 * Authentication screen.
 * @returns The authentication component
 */
export function Auth(): React.ReactElement {
  const [isRegister, setRegister] = React.useState(false);
  const toggleAuthState = () => setRegister((prevState) => !prevState);
  const submitText = isRegister ? 'Sign up' : 'Log in';
  const authText = isRegister ? 'Already have an account?' : "Don't have an account?";
  const authLink = isRegister ? 'Sign in' : 'Sign up';

  const { signIn, signUp } = useAuth();
  const authenticate = React.useCallback(async (formValues) => {
    if (isRegister) {
      await signUp({ ...formValues });
    }

    return signIn(formValues);
  }, [signIn, signUp, isRegister]);
  const [onSubmit, loading, error] = useAsyncCallback(authenticate);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.imageSize} resizeMode="contain" />
      </View>
      <AuthForm
        loading={loading}
        error={error && 'Error credentials'}
        submitText={submitText}
        onSubmit={onSubmit}
      />
      <View style={styles.switchAuthContainer}>
        <Text style={styles.text}>{authText}</Text>
        <TouchableOpacity onPress={toggleAuthState}>
          <Text style={[styles.switchAuth, styles.text]}>{authLink}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Auth;
