import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'contained' | 'text';
}

export default function Button({
  children,
  onPress,
  style,
  textStyle,
  loading = false,
  disabled = false,
  variant = 'contained',
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        variant === 'contained' ? styles.contained : styles.text,
        style,
        (disabled || loading) && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'contained' ? '#fff' : '#007AFF'} />
      ) : (
        <Text
          style={[
            variant === 'contained' ? styles.buttonText : styles.textButton,
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contained: {
    backgroundColor: 'green',
  },
  text: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textButton: {
    color: 'black',
    fontSize: 14,
  },
});
