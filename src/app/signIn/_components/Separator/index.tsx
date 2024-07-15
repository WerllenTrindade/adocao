import theme from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export function Separator(){
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
    <View style={{borderColor: theme.COLORS.primary, borderWidth: 0.4, width: '40%'}}/>
    <MaterialIcons size={20} color={theme.COLORS.primary} name="pets" />
    <View style={{borderColor: theme.COLORS.primary, borderWidth: 0.4, width: '40%'}}/>
    </View>
  )
}