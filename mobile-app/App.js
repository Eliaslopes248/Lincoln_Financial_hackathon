import { Text, View, ScrollView, Button, Image }  from 'react-native';
import { StyleSheet }                             from 'react-native';
import { SafeAreaView }                           from 'react-native-safe-area-context';
import './global.css';
import TabNavigator                               from './components/TabNavigator';
import { UserProvider }                           from './contexts/UserContext';


export default function App() {
  return (
    <UserProvider>
      <TabNavigator/>    
    </UserProvider>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    
  }
);