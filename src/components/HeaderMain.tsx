import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HeaderMain() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.headerContainer, { marginTop: insets.top }]}>
      <View style={styles.headerImage} />
      <Text style={styles.headerText}>¡Hola Luis!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    lineHeight: 2,
  },
  headerImage: {
    borderRadius: 50,
    height: 25,
    width: 25,
    backgroundColor: '#000',
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
  },
});
