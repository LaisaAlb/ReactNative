import { NavigationContainer } from "@react-navigation/native";

import 'react-native-gesture-handler'
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Button, Text, View } from "react-native";
// import Home from "./src/pages/Home";
// import Sobre from "./src/pages/Sobre";
// import Contato from "./src/pages/Contato";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import Ionicons from '@expo/vector-icons/Ionicons'


// import Feather from '@expo/vector-icons/Feather'

// export default function App(){
//   return(
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Feather 
//         name="users"
//         size={45}
//         color='#FF0000'
//     />

//     </View>
//   )
// }


// export default function App(){
//   return(
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Sujeito Programador</Text>

//     </View>
//   )
// }

// const Stack = createNativeStackNavigator();

// export default function App(){
//   return(
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} options={{ title: 'Tela inicio'}}/>
//         <Stack.Screen name="Sobre" component={Sobre}/>

//         <Stack.Screen name="Contato" component={Contato}/>

//       </Stack.Navigator>
//     </NavigationContainer>
//   )

// 



import Routes from './src/routes';

export default function App(){
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
}