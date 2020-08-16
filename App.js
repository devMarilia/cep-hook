import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  const [text, setText] = useState('Colsulta de cep API Hook')
  const [ sub, setSub] = useState('Hook')
 return (
  <View style={styles.container}>
    <Text>{text}</Text>
    <Text>{sub}</Text>
  </View>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})