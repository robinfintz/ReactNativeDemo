import React, { useState } from "react";
import { Text, View, Picker, StyleSheet } from "react-native";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Text>Pick a programming language!</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ fontSize: 15, height: 30, width: 100 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="py" />
        <Picker.Item label="C++" value="cpp" />
        <Picker.Item label="C" value="c" />
        <Picker.Item label="R" value="r" />
      </Picker>
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
  }
});
