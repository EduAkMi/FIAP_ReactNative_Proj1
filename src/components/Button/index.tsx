import React, {memo} from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

// Interface
interface ButtonProps extends TouchableOpacityProps {
  text: string;
  primary?: boolean;
  loading?: boolean;
  marginVertical: boolean;
}

// Styles
import styles from './styles';

export const Button = memo(
  ({text, marginVertical = false, primary = true, loading = false, ...props}: ButtonProps) => {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          primary ? styles.primary : styles.secondary,
          loading && styles.loading,
          marginVertical && styles.marginVertical
        ]}
        activeOpacity={0.7}
        disabled={loading}
        {...props}>
        <Text
          style={[
            styles.textButton,
            primary ? styles.textButtonPrimary : styles.textButtonSecondary,
          ]}>
          {loading ? 'Carregando...' : text}
        </Text>
      </TouchableOpacity>
    );
  },
);
