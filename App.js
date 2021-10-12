import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Python" value="py" />
        <Picker.Item label="C++" value="cpp" />
        <Picker.Item label="C" value="c" />
        <Picker.Item label="R" value="r" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});
