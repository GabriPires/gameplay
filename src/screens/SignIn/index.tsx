import React from 'react';
import { Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './style';

import IllustrationImg from '../../assets/illustration.png';

export const SignIn = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} style={'auto'} translucent />
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={'stretch'}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}suas jogatinas {'\n'}facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}favoritos com seus amigos
        </Text>

        <ButtonIcon title={'Entrar com o Discord'} />
      </View>
    </View>
  );
};
