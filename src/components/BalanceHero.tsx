import { View, Text, StyleSheet, Image } from 'react-native';

export default function BalanceHero() {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.balanceImageContainer}>
        <Image
          style={styles.balanceIcon}
          source={require('../../assets/paypal-pngrepo-com.png')}
        />
      </View>
      <View style={styles.balanceContent}>
        <Text style={styles.balanceMoney}>$100,000.00</Text>
        <Text style={styles.balanceTitle}>Balance</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    boxShadow: '0px 10px 60px 4px rgba(0,0,0,0.1)',
  },
  balanceImageContainer: {
    marginRight: 10,
    marginLeft: 5,
    padding: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 50,
  },
  balanceIcon: {
    height: 20,
    width: 20,
  },
  balanceContent: {
    flexDirection: 'column',
  },
  balanceMoney: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceTitle: {
    fontSize: 12,
    color: '#323232',
  },
});
