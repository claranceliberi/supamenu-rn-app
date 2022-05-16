import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

interface ButtonProps {
  mode: 'contained' | 'outlined';
  style: ViewStyle;
  onPress: () => void;
  children: React.ReactNode;
}

export default function Button({
  mode,
  style,
  onPress,
  children,
  ...props
}: ButtonProps) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: '#F7941D' },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      onPress={onPress}
      {...props}
    >
      {children}
    </PaperButton>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '80%',
    padding: 4,
    borderRadius: 5,
  },

  text: {
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: 15,
    color: '#FFFFFF',
  },
});
