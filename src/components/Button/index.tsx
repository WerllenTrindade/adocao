import React, { createContext, useContext } from 'react';
import { Text, TouchableOpacity, ActivityIndicator, TextProps, TouchableOpacityProps } from 'react-native';
import styles from './styles'; // Importa os estilos criados

type Variants = 'primary' | 'secondary';

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
};

const ThemeContext = createContext<{ variant?: Variants }>({});

function Button({ variant = 'primary', children, isLoading, ...rest }: ButtonProps) {
  const { variant: themeVariant } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.buttonBase,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        rest.style
      ]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? (
          <ActivityIndicator color={'#ccf5b2'}  />
        ) : (
          children
        )}
      </ThemeContext.Provider>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  const { variant } = useContext(ThemeContext);

  return (
    <Text style={variant === 'primary' ? styles.primaryTitle : styles.secondaryTitle}>
      {children}
    </Text>
  );
}

Button.Title = Title;

export { Button };
