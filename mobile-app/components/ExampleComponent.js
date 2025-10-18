import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ExampleComponent() {
  return (
    <View className="bg-gray-50 p-6 rounded-xl shadow-lg">
      <Text className="text-xl font-bold text-gray-800 mb-4">
        Tailwind CSS Examples
      </Text>
      
      {/* Button Examples */}
      <TouchableOpacity className="bg-blue-500 py-3 px-6 rounded-lg mb-3">
        <Text className="text-white font-semibold text-center">
          Primary Button
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity className="bg-green-500 py-2 px-4 rounded-md mb-3">
        <Text className="text-white text-sm text-center">
          Secondary Button
        </Text>
      </TouchableOpacity>
      
      {/* Card Example */}
      <View className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
        <Text className="text-gray-700 font-medium mb-2">
          Card Title
        </Text>
        <Text className="text-gray-500 text-sm">
          This is a card component styled with Tailwind CSS classes.
        </Text>
      </View>
      
      {/* Flexbox Example */}
      <View className="flex-row justify-between items-center mt-4 p-3 bg-yellow-100 rounded-lg">
        <Text className="text-yellow-800 font-medium">Left Item</Text>
        <Text className="text-yellow-800 font-medium">Right Item</Text>
      </View>
    </View>
  );
}
