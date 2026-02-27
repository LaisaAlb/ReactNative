import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from "react-native";

// ScrollView
// class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>

//         {/* <ScrollView showsVerticalScrollIndicator={false}> Aqui é vertical e tira a barrinha de rolagem*/}
//          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//           <View style={styles.box1}></View>
//           <View style={styles.box2}></View>
//           <View style={styles.box3}></View>
//           <View style={styles.box4}></View>
//         </ScrollView >
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   box1: {
//     backgroundColor: 'red',
//     height: 350,
//     width: 250
//   },
//   box2: {
//     backgroundColor: 'green',
//     height: 350,
//     width: 250
//   },
//   box3: {
//     backgroundColor: 'yellow',
//     height: 350,
//     width: 250
//   },
//   box4: {
//     backgroundColor: 'blue',
//     height: 350,
//     width: 250
//   },

// })

// export default App;

// FlatList > Basicamente, ele só renderiza e ocupa espaço na memória do que está sendo exibidp. O que naõ e´exibido, ele não ocupa nenhum espaço. Ele serve para lista 

import Pessoa from "./src/Pessoas";

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      feed: [
        {id: '1', nome: 'Laísa', idade: 15, email: 'laisa@gmail.com'},
        {id: '2',  nome: 'Joao', idade: 22, email: 'joao@gmail.com'},
        {id: '3',  nome: 'Henrique', idade: 20, email: 'henrique@gmail.com'},
        {id: '4',  nome: 'Laísa', idade: 15, email: 'laisa@gmail.com'},
        {id: '5',  nome: 'Laísa', idade: 15, email: 'laisa@gmail.com'},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>

      <FlatList
      data={this.state.feed}
      keyExtractor={(item) => item.id}
      renderItem={ ({item}) => <Pessoa data={item}/>  }
      />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
})

export default App;

