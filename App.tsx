import MainView from './src/views/Main';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <MainView />
    </SafeAreaProvider>
  );
}