import React, {useEffect} from "react"
import { View, Button, StyleSheet } from 'react-native';
import {  SafeAreaProvider } from "react-native-safe-area-context"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Animated from 'react-native-reanimated';


function App({ hideSplashScreen }) {
  useEffect(() => {
    hideSplashScreen()
  }, [])
  return <AppNavigator />
}



const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 300, height: 300 }}
        sharedTransitionTag="tag"
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 100, height: 100 }}
        sharedTransitionTag="tag"
      />
    </View>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App
