import { ErrorInput } from "@/components/ErrorInput";
import { Input } from "@/components/Input";
import theme from "@/theme";
import { Eye, EyeOff, Lock } from "lucide-react-native";
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
        <Lock color={theme.COLORS.zinc[500]} size={25} style={{ marginLeft: 15 }} />
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
              <Eye color={theme.COLORS.zinc[500]} size={25} style={{ marginRight: 15 }} />
              :
              <EyeOff color={theme.COLORS.zinc[500]} size={25} style={{ marginRight: 15 }} />
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