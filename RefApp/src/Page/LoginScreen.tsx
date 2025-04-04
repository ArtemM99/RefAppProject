import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AuthForm from '../Components/AuthForm';
import Button from '../Components/Button';
import { RootStackParamList } from '../Navigation/AppNavigator';
import { View, Text } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Здесь будет логика авторизации
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Имитация запроса
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Ошибка', 'Не удалось выполнить вход');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = (): boolean => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Ошибка', 'Введите корректный email');
      return false;
    }

    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Добро пожаловать в Ref</Text>
      </View>

      <AuthForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
      />

      <Button
        onPress={handleLogin}
        style={styles.button}
        loading={isLoading}
        disabled={isLoading}
      >
        Войти
      </Button>

      <Button
        onPress={() => navigation.navigate('Register')}
        variant="text"
        style={styles.registerButton}
      >
        Нет аккаунта? Зарегистрируйтесь
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  button: {
    marginTop: 16,
    
  },
  registerButton: {
    marginTop: 12,
  },
});
