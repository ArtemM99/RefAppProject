import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Lottie from 'lottie-react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const Loader: React.FC = () => {
  const animationRef = useRef<Lottie>(null);
  const [showContent, setShowContent] = useState(false);
  const animationOpacity = useSharedValue(1);
  const contentOpacity = useSharedValue(0);

  // Стили анимации
  const animationStyle = useAnimatedStyle(() => ({
    opacity: animationOpacity.value
  }));

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value
  }));

  useEffect(() => {
    // Запускаем анимацию при монтировании
    animationRef.current?.play();

    // Через 5 секунд скрываем анимацию и показываем полки
    const timer = setTimeout(() => {
      animationOpacity.value = withTiming(0, {
        duration: 500,
        easing: Easing.out(Easing.exp)
      });
      contentOpacity.value = withTiming(1, {
        duration: 500,
        easing: Easing.out(Easing.exp)
      });
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Создаем 6 широких полок
  const renderShelves = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <View 
        key={`shelf-${index}`} 
        style={[
          styles.shelf,
          index % 2 === 0 ? styles.shelfPrimary : styles.shelfSecondary,
          index === 0 && styles.firstShelf,
          index === 5 && styles.lastShelf
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      {/* Белый фон */}
      <View style={styles.background} />

      {/* Анимация открытия холодильника */}
      <Animated.View style={[styles.animationContainer, animationStyle]}>
        <Lottie
          ref={animationRef}
          source={require('../../assets/fridge.json')}
          style={styles.lottieAnimation}
          loop={false}
          autoPlay={false}
        />
      </Animated.View>

      {/* Содержимое холодильника (широкие полки) */}
      {showContent && (
        <Animated.View style={[styles.fridgeContent, contentStyle]}>
          {renderShelves()}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  animationContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  lottieAnimation: {
    width: '100%',
    height: '100%',
  },
  fridgeContent: {
    width: '95%',
    height: '90%',
    backgroundColor: '#f5f9ff',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
  },
  shelf: {
    height: height * 0.12, // Широкие полки
    borderRadius: 8,
    marginVertical: 8,
  },
  shelfPrimary: {
    backgroundColor: '#e0ecff',
    borderBottomWidth: 3,
    borderColor: '#c0d0f0',
  },
  shelfSecondary: {
    backgroundColor: '#ebf2ff',
    borderBottomWidth: 3,
    borderColor: '#d0e0ff',
  },
  firstShelf: {
    marginTop: 0,
  },
  lastShelf: {
    marginBottom: 0,
  },
});

export default Loader;