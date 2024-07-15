import theme from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export function VersionApp(){
  return (
    <View style={{
      flexDirection: 'row', 
      gap: 4,
      paddingBottom: 10,
      justifyContent: 'center',
      alignItems: 'center'}}>
      <MaterialIcons size={20} color={theme.COLORS.primary} name="pets" />
      <Text style={{fontSize: 15, fontFamily: theme.FONTS.semibold, color: theme.COLORS.primary}}>Versão 1.0.0</Text>
    </View>
  )
}