import theme from '@/theme';
import { StyleSheet } from 'react-native';
import {  RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  base: {
    height: 50,
    gap: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.COLORS.primary,
    fontSize: RFValue(28),
    color: theme.COLORS.primary
  },
  nonPrimary: {
    height: 45,
    paddingHorizontal: RFValue(16)
  },
  secondary: {
    backgroundColor: '#18181b', // Cor equivalente a 'zinc-950'
  },
  tertiary: {
    backgroundColor: '#1f1f23', // Cor equivalente a 'zinc-900'
  },
  textInput:{
    flex:1,
    color: theme.COLORS.primary,
    fontFamily: theme.FONTS.regular,
    fontSize: RFValue(14)
  }
});

export default styles;
