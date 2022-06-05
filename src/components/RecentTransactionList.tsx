import { View, Text, StyleSheet, Image } from 'react-native';

let x = [1, 2, 3, 4, 5];

const CardTransaction = () => (
  <View style={styles.cardTransaction}>
    <View style={styles.cardImageContainer}>
      <Image
        style={styles.cardImage}
        source={require('../../assets/paypal-pngrepo-com.png')}
      />
    </View>
    <View style={styles.cardText}>
      <Text style={styles.cardMainText}>Uber BV</Text>
      <Text style={styles.cardSubText}>13 May · Automatic Payment</Text>
    </View>
    <View style={styles.cardMoney}>
      <Text style={styles.cardMoneyText}>-$10.98 USD</Text>
    </View>
  </View>
);

export default function RecentTransactionList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent activity</Text>
      {x.map((item, index) => (
        <CardTransaction key={`${index}-list`} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', marginTop: 10 },
  title: {
    fontSize: 15,
    marginTop: 20,
    marginRight: 10,
    marginLeft: 5,
    padding: 20,
    color: '#323232',
  },
  cardTransaction: {
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#eee',
    borderWidth: 2,
    justifyContent: 'space-between',
  },
  cardImageContainer: {
    marginRight: 10,
    marginLeft: 5,
    padding: 12,
    borderRadius: 50,
  },
  cardImage: {
    height: 20,
    width: 20,
  },
  cardText: {
    marginLeft: -80,
    marginVertical: 5,
  },
  cardMainText: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardSubText: {
    fontSize: 11,
    fontWeight: '400',
  },
  cardMoney: {
    marginTop: 5,
  },
  cardMoneyText: {
    fontSize: 15,
    textAlign: 'right',
  },
});
