// Dependencies
import React from 'react';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';

// Styles
import styles from './styles';

/**
 * Form properties defintiions
 * @interface FormValues
 */
export interface FormValues {
  password: string;
  login: string;
}

/**
 * Props definition of {@link AuthForm}
 * @interface AuthFormProps
 */
export interface AuthFormProps {
  submitText: string;
  onSubmit: (formValues: FormValues) => Promise<unknown>;
  loading: boolean;
  error?: string;
}

export function AuthForm(props: AuthFormProps): React.ReactElement {
  const { submitText, onSubmit, loading, error } = props;
  const [login, setLogin] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <Input
        placeholder="Login"
        returnKeyType="next"
        onChangeText={setLogin}
        value={login}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        returnKeyType="done"
        onChangeText={setPassword}
        value={password}
      />
      <Text>{error}</Text>
      <Button
        buttonStyle={styles.buttonContainer}
        title={submitText}
        loading={loading}
        onPress={() => onSubmit({ login, password })}
      />
    </View>
  );
}

export default React.memo(AuthForm);
