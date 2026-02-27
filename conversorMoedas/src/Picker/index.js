import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export function PickerItem(props) {

    let moedasItems = props.moedas.map((item, index) => {
        return (
            <Picker.Item 
                key={index} 
                label={item.key} 
                value={item.key} 
            />
        );
    })


  return (
    <Picker 
        selectedValue={props.moedaSelecionada}
        onValueChange={(itemValue) => props.onChange(itemValue)} 
    >
        {moedasItems}
    </Picker>
  );
}