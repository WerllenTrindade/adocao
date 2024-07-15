import { TouchableOpacity, Image, Text, SafeAreaView, View } from "react-native";
import s from "./styles";
import {Link, router} from "expo-router" 
import { Button } from "@/components/Button";
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import theme from "@/theme";

export default function Walcome() {
  return (
    <SafeAreaView style={s.container}>
      <View style={s.containLogo}>
        <Image
          resizeMode='contain'
          style={s.logo}
          source={require('../../assets/logo.png')}
        />
      </View>
      
      <View style={s.backgroundFooter}>
      <View style={s.bodyInfo}>
        <Text style={s.bodyTitle}>Bem-vindo(a) ao Adocão</Text>
        <Text style={s.bodyText}>
          Abra as portas do seu coração{"\n"}
          e adote um amigo de quatro patas.
        </Text>
      </View>

      <View style={s.containButton}>
        <Button variant="secondary"  onPress={() => router.navigate("/signIn")}>
          <Button.Title>Acessar</Button.Title>
          <MaterialIcons style={{paddingLeft: 8}} size={20} color={theme.COLORS.primary} name="pets"/>
        </Button>
      </View>
      </View>
    </SafeAreaView>
  )
}