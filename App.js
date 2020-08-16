import React, {useState} from 'react';
import { View, Text, StyleSheet , TouchableOpacity, SafeAreaView} from 'react-native';
//import api from './src/services/api'

export default function App() {
  const [text, setText] = useState('Colsulta de cep API Hook')
  const [ sub, setSub] = useState('Hook')
 return (
  <SafeAreaView style={styles.container}>
    <Text>{text}</Text>
    <Text>{sub}</Text>
  </SafeAreaView>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})