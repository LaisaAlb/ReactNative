import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

export default function App() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function carregarFilmes() {
            const response = await api.get('r-api/?api=filmes');
            setFilmes(response.data);
            setLoading(false);
        }

        carregarFilmes();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#09A6FF" style={styles.spinner} />
            </View>
        );
    }

    else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={filmes}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => <Filmes data={item} />}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        height: 50,
        width: 50,
    },
});
