import { Slot, Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'
import { Loading } from "@/components/Loading";
import theme from "@/theme";

export default function Layout(){
  const [fontsLoad] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold
  })

  if(!fontsLoad){
    return <Loading />
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.COLORS.zinc[200]}}>
      <StatusBar barStyle="light-content" />
        <Slot />
    </SafeAreaView>
  )
}