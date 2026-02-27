import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View onTouchStart={(event) => {
        Alert.alert('Comelou a clicar', "Clique Iniciado");
      }}
        onTouchEnd={(evento) => {
          Alert.alert('Comelou a soltar', "Clique Finalizado");
        }}>
        <Text>Olá</Text>
      </View>
      <Text
        selectable={true}> Hello
      </Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
