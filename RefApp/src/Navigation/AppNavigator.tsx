import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Page/HomeScreen';
import LoginScreen from '../Page/LoginScreen';
import RegisterScreen from '../Page/RegisterScreen';


const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export default function AppNavigator() {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
}
