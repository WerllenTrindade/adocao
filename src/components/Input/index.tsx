import { ReactNode } from "react"
import {
  TextInput,
  TextInputProps,
  View,
  ViewProps,
  Platform,
} from "react-native"
import theme from "@/theme"
import styles from "./styles"

type Variants = "primary" | "secondary" | "tertiary"

type InputProps = ViewProps & {
  children: ReactNode
  variant?: Variants
}

function Input({
  children,
  variant = "primary",
  ...rest
}: InputProps) {
  return (
    <View
    style={[
      styles.base,
      variant !== 'primary' && styles.nonPrimary,
      variant === 'secondary' && styles.secondary,
      variant === 'tertiary' && styles.tertiary
    ]}
      {...rest}
    >
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      style={styles.textInput}
      placeholderTextColor={theme.COLORS.zinc[400]}
      cursorColor={theme.COLORS.zinc[100]}
      selectionColor={Platform.OS === "ios" ? theme.COLORS.zinc[100] : undefined}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
