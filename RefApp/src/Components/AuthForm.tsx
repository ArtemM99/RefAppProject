import { StyleSheet, View } from 'react-native';
import Input from './Input';

interface AuthFormProps {
  email: string;
  password: string;
  onEmailChange: (text: string) => void;
  onPasswordChange: (text: string) => void;
}

export default function AuthForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
}: AuthFormProps) {
  return (
    <View>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={onEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Пароль"
        value={password}
        onChangeText={onPasswordChange}
        secureTextEntry
      />
    </View>
  );
}
