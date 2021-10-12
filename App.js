import React, { useState } from "react";
import { Text, View, Picker, StyleSheet, Button, Alert} from "react-native";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text>Pick a programming language!</Text>
      <View style={styles.pick}>
        <Picker
          selectedValue={selectedValue}
          style={{ fontSize: 15, height: 10, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Java" value="System.out.println(Hello);" />
          <Picker.Item label="JavaScript" value="console.log(Hello);" />
          <Picker.Item label="Python" value="print(Hello)" />
          <Picker.Item label="C++" value="cout >> Hello" />
          <Picker.Item label="C" value="printf(Hello)" />
        </Picker>
      </View>
      <Button
        onPress={() => Alert.alert(selectedValue)}
         title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>Thank you!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    fontSize: 30,
    alignItems: "center"
  },
  pick: {
    flex: 0.25,
    fontSize: 10
  }
});
