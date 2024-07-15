import { StyleSheet } from 'react-native'
import theme from '../../theme'
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

const s = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.COLORS.zinc[200]
  },
  containLogo:{
    alignItems: 'center',
  },
  logo: {
    height: RFValue(250),
    width: RFValue(250),
    tintColor: theme.COLORS.zinc[800],
    marginTop: RFPercentage(15),
    marginBottom: RFPercentage(12),
  },
  bodyInfo:{
    paddingLeft: RFValue(15)
  },
  bodyTitle:{
    fontSize: RFValue(20),
    paddingBottom: RFValue(5),
    fontFamily: theme.FONTS.semibold,
    color: theme.COLORS.white
  },
  bodyText:{
    fontSize: RFValue(14),
    letterSpacing: 0.8,
    fontFamily: theme.FONTS.regular,
    color: theme.COLORS.white
  },
  containButton:{
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10
  },
  button:{
    backgroundColor: theme.COLORS.primary,
    borderRadius: 15
  },
  textButton:{
    fontWeight: '700',
    color: theme.COLORS.white,
    fontSize: RFValue(20),
    paddingVertical: 15,
    paddingHorizontal: RFPercentage(25)
  },
  backgroundFooter:{
    flex: 1,
    backgroundColor: theme.COLORS.primary,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 45
  }

})

export default s