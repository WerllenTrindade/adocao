import { ErrorInput } from "@/components/ErrorInput";
import { Input } from "@/components/Input";
import theme from "@/theme";
import Fontisto from '@expo/vector-icons/Fontisto'
import Entypo from '@expo/vector-icons/Entypo'
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";

interface Props {
  placeholder: string,
  name: string;
}

export function InputPassword({ placeholder, name}: Props){
  const { control, formState: { errors } } = useFormContext();
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Controller
    control={control}
    rules={{
      required: true,
    }}
    render={({ field: { onChange, onBlur, value } }) => (
      <View>
      <Input>
        <Fontisto name="locked" color={theme.COLORS.zinc[500]} size={20} style={{ marginLeft: 15 }} />
        <Input.Field
          secureTextEntry={!passwordVisible}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        <TouchableOpacity activeOpacity={0.7} onPress={() => setPasswordVisible(state => !state)}>
          {
            passwordVisible ?
              <Entypo name="eye" color={theme.COLORS.attention} size={25} style={{ marginRight: 15 }} />
              :
              <Entypo name="eye-with-line" color={theme.COLORS.zinc[500]} size={25} style={{ marginRight: 15 }} />
          }
        </TouchableOpacity>
      </Input>
      {errors?.[name]?.message && <ErrorInput message={errors?.[name]?.message as string}/> }
      </View>
    )}
    name={name}
  />
    
  )
}