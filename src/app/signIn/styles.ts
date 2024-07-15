import theme from "@/theme";
import { Dimensions, StyleSheet } from "react-native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: theme.COLORS.zinc[100],
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo:{
    width: 140,
    height: 140,
    tintColor: theme.COLORS.white,
  },
  diagonalBackground: {
    position: "absolute",
    right: 0,
    bottom: "32%",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: Dimensions.get("window").width,
    borderBottomWidth: 300,
    borderRightColor: theme.COLORS.primary,
    borderBottomColor: theme.COLORS.zinc[100]
  },
  modal: {
    backgroundColor: theme.COLORS.white,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: theme.COLORS.overley,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 80,
    marginTop: 25
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },
  containLogo: {
    alignItems: "center",
  }
});
