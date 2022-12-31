import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/PresentationLayer/screeens/LoginScreen';
import SignUpScreen from './src/PresentationLayer/screeens/SignUpScreen';
import Router from './src/PresentationLayer/navigation/Router';
import HomeTabNavigation from './src/PresentationLayer/navigation/HomeTabNavigation';
import { COLOURS } from './assets/utilities/COLOURS';

export default function App() {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>

    <Router/>

      <StatusBar style="auto" />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.SECONDARY
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
