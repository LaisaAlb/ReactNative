import Slider from "@react-native-community/slider";
import React, { Component } from "react";
import { View, Text, Image, Button, StyleSheet, TextInput, TouchableOpacity, Switch } from "react-native";

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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: '',
//       input: ''
//     };

//     // this.pegaNome = this.pegaNome.bind(this);
//     this.entrar = this.entrar.bind(this);
//   }

//   entrar(){
//     if(this.state.input === ''){
//       input.clear(); 
//       alert('Digite seu nome')
//       return;
//     }

//     this.setState({nome: 'Bem vindo ' + this.state.input})
//   }

// pegaNome(texto) {
//   if (texto.length > 0) {
//     this.setState({ nome: 'Bem vindo ' +  texto })
//   }
//   else{
//     this.setState({nome: ''})
//   }
// }

//   render() {
//     return (
//       <View style={styles.container}>

//         <TextInput style={styles.input} placeholder="Dgite seu nome" underlineColorAndroid="transparent" 
// onChangeText={this.pegaNome} 
//         onChangeText={(texto) => this.setState({input: texto})} />

//         <Button title="Entrar" onPress={this.entrar}/>

//         <Text style={styles.texto}> {this.state.nome} </Text>

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//   },
//   input: {
//     height: 45,
//     borderWidth: 1,
//     borderColor: '#222',
//     margin: 10,
//     fontSize: 20,
//     padding: 10,
//   },
//   texto: {
//     textAlign: 'center',
//     fontSize: 25
//   }
// })

// export default App;


// Slider
// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = { 
//       valor: 0
//     }
//   }

//   render(){
//     return(
//       <View style={styles.container}>
//         <Slider
//         minimumValue={0}
//         maximumValue={100}
//         onValueChange={ (valor) => this.setState({valor: valor}) }
//         value={this.state.valor}
//         minimumTrackTintColor="#00FF00"
//         maximumTrackTintColor="#FF0000"
//         />

//         <Text style={{textAlign: 'center', fontSize: 25, color: 'red'}}>
//           {this.state.valor.toFixed(0)}
//         </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//   },
// })

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = { 
//       status: false,
//     }
//   }

//   render(){
//     return(
//       <View style={styles.container}>

//         <Switch 
//           value={this.state.status}
//           onValueChange={ (valorSwitch) => this.setState({status: valorSwitch}) }
//         />

//         <Text style={{textAlign: 'center', fontSize: 25}}>
//           {this.state.status ? 'Ativo' : 'Inativo'}
//         </Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 40,
//   },
// })


import { Picker } from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        { sexoNome: 'Masculino', valor: 1 },
        { sexoNome: 'Feminino', valor: 2 },
      ],
      limite: 250,
      estudante: false,
    };

    this.enviarDados = this.enviarDados.bind(this);

  }

  //Metodo que é chamado quando você clica no botao Abrir Conta
  enviarDados() {

    if (this.state.nome === '' || this.state.idade === '') {
      alert('Preencha todos dados corretamente!')
      return;
    }

    alert(
      'Conta aberta com sucesso!! \n\n' +
      'Nome: ' + this.state.nome + '\n' +
      'Idade: ' + this.state.idade + '\n' +
      'Sexo: ' + this.state.sexos[this.state.sexo].sexoNome + ' \n' +
      'Limite Conta: ' + this.state.limite.toFixed(2) + '\n' +
      'Conta Estudante: ' + ((this.state.estudante) ? 'Ativo' : 'Inativo')
    );

  }


  render() {

    //Retorna os items do Picker do sexo M ou F
    let sexoItems = this.state.sexos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.sexoNome} />
    });

    return (
      <View style={styles.container}>
        <Text style={styles.bancoLogo}>Banco React</Text>

        <View style={styles.areaFormulario}>


          <Text style={styles.textoNome}>Nome:</Text>
          <TextInput style={styles.input}
            placeholder="Digite seu nome"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({ nome: texto })}

          />

          <Text style={styles.textoNome}>Idade:</Text>
          <TextInput style={styles.input}

            placeholder="Digite sua idade"
            underlineColorAndroid="transparent"
            onChangeText={(texto) => this.setState({ idade: texto })}
            keyboardType="numeric" // Deixando teclado apenas numerico
          />

          <View style={styles.areaSexo}>
            <Text style={styles.textoNome}>Sexo:</Text>
            <Picker style={styles.pickerSexo}
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) => this.setState({ sexo: itemValue })}>

              {sexoItems}

            </Picker>
          </View>

          <View style={styles.limiteArea}>
            <Text style={styles.textoNome}>Seu Limite:</Text>
            <Text style={styles.limiteTexto}>R$ {this.state.limite.toFixed(0)}</Text>
          </View>

          <View style={styles.areaSlider}>
            <Slider
              minimumTrackTintColor="#CF0000"
              minimumValue={250}
              maximumValue={4000}
              value={this.state.limite}
              onValueChange={(limite) => this.setState({ limite: limite })}
            />
          </View>


          <View style={styles.areaEstudante}>
            <Text style={styles.textoNome}>Estudante:</Text>
            <Switch
              style={{ paddingTop: 15 }}
              trackColor="#00c300"
              value={this.state.estudante}
              onValueChange={(valorEstudante) => this.setState({ estudante: valorEstudante })}
            />
          </View>



          <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlayColor="#000000">
            <Text style={styles.botaoTexto}>Abrir Conta</Text>
          </TouchableOpacity>


        </View>

      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  areaFormulario: {
    flexDirection: 'column',
    margin: 10,
  },
  bancoLogo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000'
  },
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 38,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  areaSexo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
  },
  pickerSexo: {
    flex: 1
  },
  limiteArea: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  limiteTexto: {
    color: '#FF0000',
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  areaEstudante: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  botao: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderRadius: 150,
    margin: 20
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

});

