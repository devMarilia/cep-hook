import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet , TouchableOpacity, SafeAreaView, TextInput, Keyboard} from 'react-native';
import api from './src/services/api'

export default function App() {
  const [cep, setCep] = useState('')
  const inpuRef = useRef(null)
  const [cepUser, setCepUser] = useState(null)

   async function buscar() {
    if( cep == '') {
      alert("Digite um cep válido")
      setCep('')
      return
    }
    try{
      const response = await api.get(`${cep}/json`)
      console.log(response.data)
      setCepUser(response.data)
      Keyboard.dismiss() //garantir que o teclado seja fechado
    }catch(error){
      console.log('ERROR: ' + error)
    }
  }

  function limpar() {
    setCep('')
    inpuRef.current.focus()
    setCepUser(null)
  }
 
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
      ref={inpuRef}
      />
    </View>
    <View style={styles.areaBtn}>
      <TouchableOpacity style={[styles.botao, {backgroundColor: "#1d75cd"}]}
      onPress={buscar}>
        <Text style={styles.botaoText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.botao, {backgroundColor: "#cd3e1d"}]}
       onPress={limpar}
       >
        <Text style={styles.botaoText}>Limpar</Text>
      </TouchableOpacity>

    </View>
    { cepUser &&  
         <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
       </View>
    }
 
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