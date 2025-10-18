import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView } from 'react-native';
import ExampleComponent from './components/ExampleComponent';

export default function App() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="flex-1 bg-white items-center justify-center py-8">
        <Text className="text-2xl font-bold text-blue-600 mb-4">
          Welcome to React Native with Tailwind!
        </Text>
        <Text className="text-gray-600 text-center px-4 mb-8">
          You can now use Tailwind CSS classes on your React Native components.
        </Text>
        
        <ExampleComponent />
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
