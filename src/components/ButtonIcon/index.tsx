import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './style';

import DiscordImg from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string;
};

export const ButtonIcon = ({ title, ...props }: Props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...props}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
