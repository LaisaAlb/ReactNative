import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Detalhes from "../Detalhes";

export default function Filmes( data ) {
    const [ visibleModal, setVisibleModal ] = useState(false);
    return (
        <View>
            <View style={styles.card}> 
                <Text style={styles.title}>{data.data.nome}</Text>

                <Image 
                    source={{ uri: data.data.foto }} 
                    style={styles.capa} />

                    <View style={styles.areaBotao}>
                        <TouchableOpacity style={styles.botao} onPress={() => {setVisibleModal(true)}}>
                            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
                        </TouchableOpacity>
                    </View>
            </View>

            <Modal animationType="slide" transparent={true} visible={visibleModal}> 
                <Detalhes  filme={data.data} voltar={() => setVisibleModal(false)} />
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        elevation: 2,
        borderRadius: 10,
        justifyContent: 'flex-end',
    },
    capa: {
        height: 200,
        width: '100%',
        borderRadius: 10,
        zIndex: 2,
    }, 
    title: {
        marginBottom: 10,
        padding: 15, 
        fontSize: 18,
        fontWeight: 'bold'
    },
    areaBotao: {
        alignItems: 'flex-end',
        marginTop: -30,
        zIndex: 9,
    },
    botao: {
        backgroundColor: '#09A6FF',
        padding: 8,
        width: 100,
        alignItems: 'center',
        borderRadius: 7,
        opacity: 1,
    },
    botaoTexto: {
        color: '#FFF',
        fontSize: 15,
        textAlign: 'center',
    }
});