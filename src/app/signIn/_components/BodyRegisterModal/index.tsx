import { useState } from "react";
import { View, TouchableOpacity, Text, Keyboard } from "react-native";
import { UserRound, Eye, EyeOff, Lock } from "lucide-react-native";
import { Input } from "@/components/Input";
import theme from "@/theme";
import { Link } from "expo-router";
import { styles } from "../../styles";
import { Separator } from "../Separator";
import { Button } from "@/components/Button";
import { InputPassword } from "./_components/InputPassword";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormProps } from "./types";
import { zodResolver } from '@hookform/resolvers/zod';
import { ErrorInput } from "@/components/ErrorInput";
import { createSchemaForm } from "./schema";

interface Props {
  logado: boolean;
}

export function BodyRegisterModal({ logado }: Props) {
  const schemaForm = createSchemaForm(logado);

  const methods = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),

    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });
  
  const { control, handleSubmit, formState: { errors, isSubmitting  }  } = methods;

  function handleLogin(login: FormProps){
    Keyboard.dismiss()
    console.log(login)
  }

  return (
    <FormProvider {...methods}>
    <View style={styles.modal}>
      <View style={{ paddingTop: '5%', gap: 20 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
            <Input >
              <UserRound color={theme.COLORS.zinc[500]} size={25} style={{ marginLeft: 15 }} />
              <Input.Field
                autoCapitalize="none"
                inputMode="email"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="Usuario"
              />
            </Input>
            {errors?.email?.message && <ErrorInput message={errors.email.message}/> }
            </View>
          )}
          name="email"
        />

        <InputPassword placeholder="Senha" name="password" />
        {
          !logado && <InputPassword placeholder="Confirme a senha" name="confirmPassword" />
        }
      </View>

      <View style={{ paddingTop: '5%' }}>
        <Separator />
      </View>

      <View style={{ paddingTop: '5%' }}>
        <Button isLoading={isSubmitting} onPress={handleSubmit(handleLogin)}>
          <Button.Title>
            {logado ? 'Acessar' : 'Registrar'}
          </Button.Title>
        </Button>
        {
          logado ? 
        <TouchableOpacity  style={styles.buttonRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta? <Link href={'/'} style={{ color: theme.COLORS.primary, fontWeight: 'bold' }}>Cadastre-se</Link>
          </Text>
        </TouchableOpacity>
        :
        <Button variant="secondary" onPress={() => {}}>
          <Button.Title>
            Voltar para login
          </Button.Title>
        </Button>
        }
      </View>
    </View>
    </FormProvider>

  )
}