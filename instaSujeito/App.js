import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';

import Lista from './src/Lista';
import { StatusBar } from 'expo-status-bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'Lucas Silva',
          descricao: 'Mais um dia de muitos bugs :)',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
          likeada: false,
          likers: 0
        },
        {
          id: '2',
          nome: 'Matheus',
          descricao: 'Isso sim é ser raiz!!!!!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
          likeada: false,
          likers: 0
        },
        {
          id: '3',
          nome: 'Jose Augusto',
          descricao: 'Bora trabalhar Haha',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
          likeada: false,
          likers: 3
        },
        {
          id: '4',
          nome: 'Gustavo Henrique',
          descricao: 'Isso sim que é TI!',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
          likeada: false,
          likers: 1
        },
        {
          id: '5',
          nome: 'Guilherme',
          descricao: 'Boa tarde galera do insta...',
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false,
          likers: 32
        }
      ]
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />

        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 90 }}
          ListHeaderComponent={
            <>
              {/* Header do Instagram */}
              <View style={styles.header}>
                <TouchableOpacity>
                  <Image
                    source={require('./src/img/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <View style={styles.notification}>
                  <TouchableOpacity>
                    <Image
                      source={require('./src/img/like.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('./src/img/send.png')}
                      style={styles.icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Stories */}
              <View style={styles.storiesContainer}>
                <FlatList
                  data={this.state.feed}
                  keyExtractor={(item) => item.id + '-story'}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <View style={styles.storyItem}>
                      <Image
                        source={{ uri: item.imgperfil }}
                        style={styles.storyAvatar}
                      />
                      <Text style={styles.storyName} numberOfLines={1}>
                        {item.nome.split(' ')[0]}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </>
          }
          renderItem={({ item }) => <Lista data={item} />}
        />

        <View style={styles.footer}>
          <Image
            source={require('./src/img/home.png')}
            style={styles.footerIcon}
          />
          <Image
            source={require('./src/img/search.png')}
            style={styles.footerIcon}
          />
          <Image
            source={require('./src/img/addBox.png')}
            style={styles.footerIcon}
          />
          <Image
            source={{ uri: this.state.feed[0].imgperfil }}
            style={styles.fotoPerfil}
          />
        </View>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 40
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain'
  },
  send: {
    width: 30,
    height: 30,
  },
  icon: {
    width: 23,
    height: 23,
    marginLeft: 15,
    marginRight: 10
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    height: 75, // Mais alto
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 0.2,
    borderColor: '#ccc',
    elevation: 2,
  },
  footerIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain'
  },
  fotoPerfil: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 30,
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginBottom: 30,
  },
  storiesContainer: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 0.2,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingLeft: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 15,
    width: 70,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#c13584',
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },

});

export default App;
