import React, {useState} from 'react';
import { View, Text, StyleSheet , TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
//import api from './src/services/api'

export default function App() {
  const [cep, setCep] = useState('')
 
 return (
  <SafeAreaView style={styles.container}>
    <View style={styles.viewContainer}>
      <Text style={styles.text}>Digite o texto desejado: </Text>
      <TextInput
      style={styles.inputArea}
      placeholder="ex; 0000000"
      value={cep}
      onChangeText={(texto) => setCep(texto) }
      keyboardType="numeric"
      />
    </View>
    <View style={styles.areaBtn}>
      <TouchableOpacity style={[styles.botao, {backgroundColor: "#1d75cd"}]}>
        <Text style={styles.botaoText}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.botao, {backgroundColor: "#cd3e1d"}]}>
        <Text style={styles.botaoText}>Limpar</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.resultado}>
      <Text style={styles.itemText}>Cep: 0000-0000</Text>
      <Text style={styles.itemText}>Logradouro: Rua: react native</Text>
      <Text style={styles.itemText}>Bairro: Centro</Text>
      <Text style={styles.itemText}>Cidade: São Paulo</Text>
      <Text style={styles.itemText}>Estado: SP</Text>
    </View>
  </SafeAreaView>
 )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  viewContainer: {
    alignItems: "center"
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold"
  },
  inputArea: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around"
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
  },
  botaoText: {
    fontSize: 22,
    color: "#FFF"
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontSize: 22
  }
})