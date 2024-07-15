import theme from "@/theme";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { Text } from "react-native";
import { View } from "react-native";

interface Props {
  message?: string
}

export function ErrorInput({message}: Props) {
  return (
    <View style={{paddingTop: 2, paddingLeft: 1}}>
      <Text style={{color: theme.COLORS.attention, fontFamily: theme.FONTS.regular}}>{message}</Text>
    </View>
  )
}