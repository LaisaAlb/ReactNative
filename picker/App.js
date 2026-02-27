import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizzas: 0,
      pizzasArray: [
        { key: 1, nome: "Strogonoff", value: 35.90 },
        { key: 2, nome: "Calabresa", value: 59.90 },
        { key: 3, nome: "Frango", value: 49.90   },
        { key: 4, nome: "Portuguesa", value: 55.90 },
        { key: 5, nome: "Mussarela", value: 45.90 },
        { key: 6, nome: "Quatro Queijos", value: 65.90 },
        { key: 7, nome: "Vegetariana", value: 50.90 },
        { key: 8, nome: "Pepperoni", value: 60.90 },
      ]
    }
  }

 render(){
  let pizzasItem = this.state.pizzasArray.map((v, k) => {
    return <Picker.Item key={k} label={v.nome} value={k} />
  })
  return(
    <View style={styles.container}>
      <Text style={styles.logo}>Menu Pizza</Text>

      <Picker
        selectedValue={this.state.pizzas}
        onValueChange={(itemValue, itemIndex) =>
          this.setState({ pizzas: itemValue })
        }
      >
        {pizzasItem}
        {/* <Picker.Item key={1} label="Selecione o sabor" value={1} />
        <Picker.Item key={2} label="Calabresa" value={2} />
        <Picker.Item key={3} label="Frango" value={3} /> */}
      </Picker>

      <Text style={styles.pizzas}>Você escolheu: {this.state.pizzasArray[this.state.pizzas].nome} </Text>
      <Text style={styles.pizzas}>Total: {this.state.pizzasArray[this.state.pizzas].value.toFixed(2)}</Text>
    </View>
  )
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
  },
  pizzas:{
    marginTop: 20,
    fontSize: 28,
    textAlign: 'center',
  }
});

