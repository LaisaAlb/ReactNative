import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes({ voltar, filme }) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={voltar}>
          <Text style={{ color: '#FFF', fontSize: 16 }}>SAIR</Text>
        </TouchableOpacity>

        <Text style={styles.titulo}>
          {filme.nome}
        </Text>

        <Text style={styles.sinopse}>Sinopse:</Text>
        <Text style={styles.desc}>{filme.sinopse}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        backgroundColor: '#121212',
        width: '90%',
        height: '80%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    btnVoltar: {
        backgroundColor: '#E52246',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    titulo: {
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
    },
    sinopse: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 8,
        marginLeft: 10,
    },
    desc: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft: 10,
        marginRight: 10,
    },
});