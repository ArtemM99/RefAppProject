import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigation/AppNavigator';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Home')}
        >
         <Ionicons name='menu' size={30}></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.navText}>Вход</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.navText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'green',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: 'green',
  },
  navItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  navText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  activeNavText: {
    color: '#0056b3',
    fontWeight: 'bold',
  },
});
