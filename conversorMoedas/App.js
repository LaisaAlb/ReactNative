import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import api from './src/services/api';

import { PickerItem } from './src/Picker/index';

export default function App() {
  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moedaSelecionada, setMoedaSelecionada] = useState(null);
  const [moeadaBValor, setMoeadaBValor] = useState("");

  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0);

  useEffect(() => {
    async function loadMoedas() {
      const response = await api.get('all');
      let arrayMoedas = [];
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        });
      });
      setMoedas(arrayMoedas);
      setMoedaSelecionada(arrayMoedas[0].key);
      setLoading(false);
    }

    loadMoedas();
  }, []);

  async function converter() {
    if(moeadaBValor === 0 || moeadaBValor === "" || moedaSelecionada === null) {
      return;
    }

    const response = await api.get(`all/${moedaSelecionada}-BRL`);

    let resultado = (response.data[moedaSelecionada].ask * parseFloat(moeadaBValor));
    setValorConvertido(`${resultado.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}`);
    setValorMoeda(moeadaBValor);
    Keyboard.dismiss();
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ color: '#000', marginTop: 10 }}>Carregando...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>

        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione sua moeda</Text>
          <PickerItem
            moedas={moedas}
            moedaSelecionada={moedaSelecionada}
            onChange={(moeda) => setMoedaSelecionada(moeda)}

            style={styles.textoMoeda}
            onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
          />
        </View>

        <View style={styles.areaValo}>
          <Text style={styles.titulo}>Digite um valor para converter em (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="EX: 1.50"
            keyboardType="numeric"
            value={moeadaBValor}
            onChangeText={(valor) => setMoeadaBValor(valor)}
          />
        </View>

        <TouchableOpacity style={styles.botaoArea} onPress={converter}>
          <Text style={styles.textoBotao}>Converter</Text>
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.areaResultado}>
            <Text style={styles.valorConvertido}>{valorMoeda} {moedaSelecionada}</Text>
            <Text style={{ fontSize: 18, margin: 8, color: '#000' }}> correspoonde a </Text>
            <Text style={styles.valorConvertido}> {valorConvertido} R$</Text>
          </View>
        )}

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#101215',
    paddingTop: 20,
    alignItems: 'center',
  },
  areaMoeda: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    width: '90%',
    marginBottom: 1,
  },
  titulo: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5,
  },
  textoMoeda: {
    color: '#FFF',
    fontSize: 16,
  },
  textoValor: {
    color: '#FFF',
    fontSize: 14,
  },
  areaValo: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    width: '90%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 8,
    fontSize: 18,
    color: '#000',
    borderRadius: 8,
  },
  botaoArea: {
    backgroundColor: '#4CAF50',
    width: '90%',
    alignItems: 'center',
    height: 45,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  areaResultado: {
    backgroundColor: '#f9f9f9',
    width: '90%',
    paddingTop: 8,
    borderRadius: 8,
    alignItems: 'center',
    padding: 24,
    marginVertical: 8,
    paddingBottom: 8,
  },
  valorConvertido: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


