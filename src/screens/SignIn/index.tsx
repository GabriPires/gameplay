import React from 'react';
import { Image, Text, View } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';

import IllustrationImg from '../../assets/illustration.png';

export const SignIn = () => {
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode={'stretch'}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize{'\n'}suas jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        <ButtonIcon title={'Entrar com o Discord'} onPress={handleSignIn} />
      </View>
    </View>
  );
};
