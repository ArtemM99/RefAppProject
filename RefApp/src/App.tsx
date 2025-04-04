import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import Navbar from './Components/Navbar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <AppNavigator />
          <Navbar />
        </View>
      </NavigationContainer>
    </View>
  );
}
