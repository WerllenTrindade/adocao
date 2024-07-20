import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Text } from "react-native";
import { View } from "react-native";
import theme from "@/theme";

const minHeight = 0;

export function OfflineBanner() {
  const netinfo = useNetInfo();
  const insets = useSafeAreaInsets();
  const height = useSharedValue(0);

  const isOffline = netinfo.isInternetReachable === false;
  const maxHeight = 28 + insets.bottom / 2;

  useEffect(() => {
    if (isOffline) {
      height.value = withTiming(maxHeight);
    } else {
      height.value = withTiming(minHeight);
    }
  }, [isOffline, height, maxHeight]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    marginTop: interpolate(
      height.value,
      [minHeight, maxHeight],
      [minHeight, -insets.bottom + theme.SPACE.space4],
    ),
  }));

  return (
    <Animated.View style={animatedStyle}>
      <View
        style={styles.container}
      >
        <View style={styles.textContainer}>
          <Text>
            App is offline
          </Text>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
  },
  textContainer: {
    alignItems: "center",
    paddingVertical: theme.SPACE.space4,
  },
});
