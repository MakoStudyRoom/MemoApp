import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './src/components/Hello'


const App = () => {
  return (
    <View style={styles.container}>
      <Hello bang={true} style={{ fontSize: 16}}>World Child</Hello>
      <Hello bang={false} style={{ fontSize: 8}}>World Child</Hello>

      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0Ff00',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
