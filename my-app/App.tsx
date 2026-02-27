import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Image, TouchableOpacity } from "react-native";
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';


export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleSymbol(){
    setIsActive(!isActive);
  }
  
  return (
    <View style={ isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={ isActive ? symbolOn : symbolOff}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  containerOff: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },
});
