import { Text, View, StyleSheet, Alert } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const CountableRow = ({ countable, changeCount, index, deleteCountable }) => (
  <View style={CommonStyles.row}>
    <View style={styles.nameColumn}>
      <Text style={CommonStyles.textItem}>{countable.name}</Text>
      <Text style={CommonStyles.textItem}>{countable.count}</Text>
    </View>
    <View style={styles.buttonColumn}>
      <CountableButton
        label="+"
        submit={() => {
          changeCount(1, index);
        }}
      />
      <CountableButton
        label="-"
        submit={() => {
          changeCount(-1, index);
        }}
      />
       <CountableButton
        label="Delete"
        submit={() => {
          Alert.alert('Are you sure you wanna delete it?','Confirm', [
            {text: 'cancel', style: "cancel"},
            {text: 'OK', onPress: ()=>{ deleteCountable(index);}},
          ]);
        }}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  nameColumn: {
    flex: 0.6,
    alignItems: "center",
  },
  buttonColumn: {
    flex: 0.4,
  },
});
