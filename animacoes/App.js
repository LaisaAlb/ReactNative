import React, { useRef, useEffect, use } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

// export default function App() {

  // const larAnimada = useRef(new Animated.Value(150)).current;
  // const altAnimada = useRef(new Animated.Value(50)).current;
  // const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  // Animaçaõ pro lado ou pra cima 
  // useEffect(() => {
  //   Animated.timing(larAnimada, {
  //     toValue: 300,
  //     duration: 2000,
  //     useNativeDriver: false
  //   }).start();
  // }, []);

  // animação em sequência e paralela 
  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(larAnimada, {
  //       toValue: 300,
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),
  //     Animated.timing(altAnimada, {
  //       toValue: 100,
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),
  //     Animated.timing(opacidadeAnimada, {
  //       toValue: 0,
  //       duration: 2000,
  //       useNativeDriver: false
  //     })
  //   ]).start();
  // }, [])
  // useEffect(() => {
  //   Animated.parallel([
  //     Animated.timing(opacidadeAnimada, {
  //       toValue: 1,
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),

  //     Animated.timing(larAnimada, {
  //       toValue: 300,
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),
  //     Animated.timing(altAnimada, {
  //       toValue: 100,
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),
  //   ]).start();
  // }, [])

  // useEffect(() => { }, [

  //   Animated.sequence([
  //     Animated.timing(opacidadeAnimada, {
  //       toValue: 1,   
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),
  //     Animated.parallel([
  //       Animated.timing(larAnimada, {
  //         toValue: 300,
  //         duration: 2000,
  //         useNativeDriver: false
  //       }),
  //       Animated.timing(altAnimada, {
  //         toValue: 200,
  //         duration: 2000,
  //         useNativeDriver: false
  //       }), 

  //       Animated.timing(opacidadeAnimada, {
  //         toValue: 0,   
  //         duration: 5000,
  //         useNativeDriver: false
  //       }),
  //     ])

  //   ]).start()

  // ], []);

  // useEffect(() => {
  //   Animated.loop(
  //   //  Animated.timing(larAnimada, {
  //   //     toValue: 300,
  //   //     duration: 2000,   
  //   //     useNativeDriver: false
  //   //   }),
  //   // ).start();
  //   Animated.sequence([
  //    Animated.timing(larAnimada, {
  //       toValue: 300,
  //       duration: 2000,   
  //       useNativeDriver: false
  //     }),
  //     Animated.timing(larAnimada, {
  //       toValue: 150,
  //       duration: 2000,
  //       useNativeDriver: false
  //     }),
  //   ])
  //   ).start();
  // }, []);

  // useEffect(() => {
  //   Animated.sequence([
  //     Animated.timing(larAnimada, {
  //       toValue: 100,
  //       duration: 4000,
  //       useNativeDriver: false
  //     }),

  //     Animated.timing(altAnimada, {
  //       toValue: 100,
  //       duration: 4000,
  //       useNativeDriver: false
  //     })
  //   ]).start(() => {
  //     alert('ANIMAÇAO FINALIZADA!');
  //   });
  // }, []);

  // let procentagemLargura = larAnimada.interpolate({
  //   inputRange: [0, 100], //Entrada
  //   outputRange: ['0%', '100%'] //Vai sair 0% até 100%
  // })

  // let porcentagemAltura = altAnimada.interpolate({
  //   inputRange: [50, 100],
  //   outputRange: ['5%', '100%']
  // })

//   return (
//     <View style={style.container}>

//       <Animated.View style={{ 
//       width: larAnimada, 
//       height: altAnimada, 
//       backgroundColor: "#4169e1", 
//       justifyContent: "center" ,
//       // opacity: opacidadeAnimada,
//     }}>

//       <Text style={{textAlign: 'center', fontSize: 22, color: '#FFF'}}> Carregando... </Text>
//     </Animated.View>

//       <Animated.View
//         style={{
//           width: procentagemLargura,
//           height: porcentagemAltura,
//           backgroundColor: '#4169e1',
//           justifyContent: 'center',
//         }}
//       >

//       </Animated.View>

//     </View>
//   );
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   }
// });

import * as Animatable from 'react-native-animatable';

export default function App(){
  return(
    <View style={styles.container}>
      <Animatable.Text 
      style={styles.title}
      animation="pulse"
      >
        Sujeito Progrmador
      </Animatable.Text>

    </View>
  )
}

const styles = StyleSheet.creat({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 25, 

  }
})