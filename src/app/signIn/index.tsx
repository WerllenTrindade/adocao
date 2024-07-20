import React, { useState } from 'react'
import { Image, View, Text, KeyboardAvoidingView, Platform, ImageBackground } from 'react-native';

import { styles } from './styles';
import theme from '@/theme';

import { VersionApp } from '@/components/VersionApp';
import { BodyRegisterModal } from './_components/BodyRegisterModal';


export default function SignIn() {
  const [logado, setLogado] = useState(true);

  return (
    <ImageBackground source={require("../../assets/split_background.png")} style={styles.container}>

      {/* Header */}
      <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} enabled>
        <View style={{ alignItems: 'center', paddingTop: Platform.OS == 'ios' ? 30 : 60 }}>
          <Image
            resizeMode='contain'
            style={styles.logo}
            source={require('../../assets/logo.png')}/>
          <Text style={{ color: theme.COLORS.white }}>
            Por favor faça o{' '}{logado ? 'login' : 'cadastro'} para continuar
          </Text>
        </View>

        {/* Modal Login */}
        <BodyRegisterModal logado={logado} />
        </KeyboardAvoidingView>

      {/* Footer Version */}
      <View style={{justifyContent: 'flex-end', flex: 1}}>
      <VersionApp/>
      </View>
    </ImageBackground>
  )
}