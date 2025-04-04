import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Page/LoginScreen';
import RegisterScreen from '../Page/RegisterScreen';
import HomeScreen from '../Page/HomeScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Вход' }} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Регистрация' }}
      />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
