import React, { Component } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      "Acredite em si mesmo e tudo será possível.",
      "Grandes jornadas começam com um simples passo.",
      "Você é mais forte do que imagina.",
      "Cada dia é uma nova chance para recomeçar.",
      "Coragem é agir mesmo com medo.",
      "Seu esforço de hoje é o sucesso de amanhã.",
      "Seja a mudança que você quer ver no mundo.",
      "A persistência realiza o impossível.",
      "Nunca é tarde para começar algo novo.",
      "Você é capaz de conquistar seus sonhos.",
      "O fracasso é apenas uma oportunidade para recomeçar com mais sabedoria.",
      "Pequenas vitórias também merecem ser comemoradas.",
      "A sorte favorece os que não desistem.",
      "Seu futuro é criado pelo que você faz hoje.",
      "Tenha fé no processo.",
      "Acredite: o melhor ainda está por vir.",
      "Não compare seu caminho com o de ninguém.",
      "A disciplina é o caminho para a liberdade.",
      "Confie no tempo das coisas.",
      "Você já chegou até aqui, não pare agora!"
    ];

  }

  quebraBiscoito(){
    let numroAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase: ' "' + this.frases[numroAleatorio] + '" ',
      img: require('./assets/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}> Quebrar Biscoito </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;

