import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn/dist';
import tw from 'twrnc';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const tailwind = useTailwind();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider style={tailwind('h-full')}>
        <Navigation colorScheme={colorScheme} />
        {/* <Text style={tw`text-md text-blue-300 tracking-wide`}>liberi</Text> */}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
