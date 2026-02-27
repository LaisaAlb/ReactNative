// Async 
// import React, { Component } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Keyboard
//   } from 'react-native';

//   //Para instalar: npm install @react-native-async-storage/async-storage
//   import AsyncStorage from '@react-native-async-storage/async-storage';

// export default class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       input: '',
//       nome: ''
//     };

//     this.gravaNome = this.gravaNome.bind(this);
//   }

//   //ComponentDidMount - Quando o componente é montado em tela
//   async componentDidMount(){
//     await AsyncStorage.getItem('nome').then((value)=> {
//       this.setState({nome: value});
//     })
//   }

//   //ComponentDidUpdate - toda vez que um state é atualizado fazer algo..
//   async componentDidUpdate(_, prevState){
//     const nome = this.state.nome;

//     if(prevState !== nome){
//       await AsyncStorage.setItem('nome', nome);
//     }
//   }

//   gravaNome(){
//     this.setState({
//       nome: this.state.input
//     });
//     alert('Salvo com sucesso!');
//     Keyboard.dismiss();
//   }

//   render(){
//     return(
//       <View style={styles.container}>

//       <View style={styles.viewInput}>
//         <TextInput
//         style={styles.input}
//         value={this.state.input}
//         onChangeText={(text)=> this.setState({input: text})}
//         underlineColorAndroid="transparent"
//         />

//         <TouchableOpacity onPress={this.gravaNome}>
//           <Text style={styles.botao}>+</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.nome}>{this.state.nome}</Text>

//       </View>    
//     );

//   }

// }

// const styles = StyleSheet.create({
//   container:{
//     flex: 1,
//     marginTop: 20,
//     alignItems: 'center',
//     marginTop: 60
//   },
//   viewInput:{
//     flexDirection: 'row',
//     alignItems: 'center'
//   },
//   input:{
//     width: 350,
//     height: 40,
//     borderColor: '#000',
//     borderWidth: 1,
//     padding: 10,
//   },
//   botao:{
//     backgroundColor: '#222',
//     color: '#FFF',
//     height: 40,
//     padding: 10,
//     marginLeft: 4,
//   },
//   nome:{
//     marginTop: 15,
//     fontSize: 30,
//     textAlign: 'center'
//   }

  
// });

// Modal 
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Modal } from 'react-native';
import Entrar from './src/Entrar/Entrar';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      modalVisible:false
     };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }
  entrar(){
    this.setState({modalVisible: true});
  }
  sair(visible){
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
          <Button title="Entrar" onPress={ this.entrar }/>

          <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
            <View style={{margin:15, flex:1, alignItems:'center', justifyContent: 'center'}}>
               <Entrar fechar={ () => this.sair(false)} />
            </View>
          </Modal>

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD',
  },
});
