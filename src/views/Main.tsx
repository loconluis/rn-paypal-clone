import { StyleSheet, ScrollView } from 'react-native';
import BalanceHero from '../components/BalanceHero';
import HeaderMain from '../components/HeaderMain';
import RecentTransactionList from '../components/RecentTransactionList';

export default function Main() {
  return (
    <ScrollView style={styles.container}>
      <HeaderMain />
      <BalanceHero />
      <RecentTransactionList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eeeeee' },
});
