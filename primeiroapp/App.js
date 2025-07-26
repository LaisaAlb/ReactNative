import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";

// function App(){
//   return (
//     <View>
//       <Text> Olá mundo! </Text>
//     </View>
//   );
// }

// export default App;

// class App extends Component {w
//   constructor(props){
//     super(props)
//     this.state = {
//       nome: ''
//     }

//     this.entrar = this.entrar.bind(this)
//   }

//   entrar(nome){
//     this.setState({
//       nome:  nome
//     })
//   }

//   render() {
//     let nome = "Laísa";

//     return (
//       <View style={{ margin: 60 }}>

//       <Button title="Entrar" onPress={ () =>  this.entrar('Laísa')}/>

//         <Text style={{ fontSize: 23, color: 'red', textAlign: 'center'}}>{this.state.nome}</Text>
//         {/* <Text>Meu Primeiro App</Text>
//         <Text style={{ color: "red", fontSize: 25, margin: 15 }}>
//           Sujeito Programador
//         </Text>

//         <Text style={{ fontSize: 30 }}> {nome} </Text>
//         <Jobs largura={500} altura={200} fulano="Steve"/> */}
//       </View>
//     );
//   }
// }

// Um único componente não precisa de uma View por fora
// class Jobs extends Component {
//   render() {
//     var img = "https://sujeitoprogramador.com/steve.png";
//     return (
//       <View>
//         <Image
//           source={{ uri: img }}
//           style={{ width: this.props.largura, height: this.props.altura }}
//         />
//         <Text>{this.props.fulano}</Text>
//       </View>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <View style={styles.area}>
//         <Text style={[styles.textoPrincipal, styles.alinhaTexto]}> Eu sou o texto 1</Text>
//         <Text style={styles.alinhaTexto}> Eu sou o texto 2</Text>
//         <Text> Eu sou o texto 3</Text>
//         <Text style={styles.textoPrincipal}> Eu sou o texto 4</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   area:{
//     marginTop: 40
//   }, 
//   textoPrincipal:{
//     fontSize: 25,
//     color: 'red'
//   }, 
//   alinhaTexto:{
//     textAlign: 'center'
//   }
// });
// export default App;

// class App extends Component{
//   render(){
//     return(
//       <View style={{ flex: 1,backgroundColor: '#ddd' }}>
//         <View style={{height: 50, backgroundColor:'#222'}}>
//         </View>

//         <View style={{flex: 1,backgroundColor:'#fff'}}> <Text>Meu primeiro texto</Text></View>

//         <View style={{height: 65, backgroundColor:'#222'}}></View>
//       </View>
//     )
//   }
// }

// class App extends Component{
//   render(){
//     return(
//       <View style={{ flex: 1, marginTop: 50, flexDirection: 'row', alignItems: 'flex-start'}}>
//         <View style={{width: 50, height: 50, backgroundColor:'green'}}>
//         </View>

//         <View style={{width: 50, height: 50, backgroundColor:'red'}}></View>

//         <View style={{width: 50, height: 50,  backgroundColor:'yellow'}}></View>

//       </View>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    // this.pegaNome = this.pegaNome.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
    if(this.state.input === ''){
      input.clear(); 
      alert('Digite eu nome')
      return;
    }

    this.setState({nome: 'Bem vindo ' + this.state.input})
  }

pegaNome(texto) {
  if (texto.length > 0) {
    this.setState({ nome: 'Bem vindo ' +  texto })
  }
  else{
    this.setState({nome: ''})
  }
}

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.input} placeholder="Dgite seu nome" underlineColorAndroid="transparent" 
        // onChangeText={this.pegaNome} 
        onChangeText={(texto) => this.setState({input: texto})} />

        <Button title="Entrar" onPress={this.entrar}/>

        <Text style={styles.texto}> {this.state.nome} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
})

export default App;
