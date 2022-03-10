import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { theme } from '../../global/styles/theme';

import { styles } from './style';

type Props = {
  children: React.ReactNode;
};

export const Background = ({ children }: Props) => {
  const { secondary80, secondary100 } = theme.colors;
  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
};
