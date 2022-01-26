import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

import DiscordImg from '../../assets/discord.png';

export const ButtonIcon = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>Entrar com o Discord</Text>
    </TouchableOpacity>
  );
};
