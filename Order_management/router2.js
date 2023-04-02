import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Router3 from "./router3";


class Router2 extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <SafeAreaProvider style={{}}>
        <View style={[Styles.container, { borderBottomColor: "blue" }]}>
          <Text style={[Styles.text]}>ORDERS</Text>
        </View>
        <Router3 />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    color: "blue",
    fontSize: 17,
    fontWeight:"bold"
  },
});

export default Router2;