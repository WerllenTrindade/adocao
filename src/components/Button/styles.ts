import theme from '@/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonBase: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  primaryButton: {
    backgroundColor: theme.COLORS.primary,
  },
  secondaryButton: {
    backgroundColor: '#fff',
  },
  primaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.COLORS.white,
  },
  secondaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.COLORS.primary,
  },
});

export default styles;
