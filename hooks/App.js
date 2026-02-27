import React, { useState, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity  } from "react-native";

export default function App() {
  
  const [ nome, setNome  ] =useState('');
  const [ input, setInput] = useState('');
  const nomeInput = useRef(null);

  function alteraNome() {
    setNome(input);
    setInput('')
  }

  function novoNome() {
    nomeInput.current.focus();
  }

  const letraNome = useMemo(() => {
    console.log('Mudou')
    return nome.length;
  }, [nome]);

  useEffect(() => {
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes')
      if(nomeStorage !== null){
        setNome(nomeStorage);
      }
    }

    getStorage();

    return() => {

    };

  }, [])

  useEffect(() => {

    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome);
    }

    saveStorage();

  }, [nome])

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={input}
        onChangeText={setInput}
        ref={nomeInput}
      />

      <TouchableOpacity style={styles.botao} onPress={alteraNome}>
        <Text style={styles.textoBtn}> Alterar Nome</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>{nome}</Text>
      <Text style={styles.texto}> Tem {letraNome} letras </Text>

    <TouchableOpacity onPress={novoNome}>
      <Text style={styles.textoBtn}> Focar no Input</Text>
    </TouchableOpacity>

    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  texto: {
    color: '000',
    fontSize: 35
  },
  botao: {
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  textoBtn: {
    color: '#FFF',
    fontSize: 20
  }
});