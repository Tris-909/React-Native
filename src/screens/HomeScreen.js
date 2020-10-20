import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Separator = () => {
  return(<View style={styles.separator}></View>);
}

const HomeScreen = ({navigation}) => {
  return(
    <View>
        <Text style={styles.text}> React Native </Text>
        <Separator />
        <Button title="Primitive Text Component" onPress={() => navigation.navigate('Computer')}/>
        <Separator />
        <Button title="List Demo" onPress={() => navigation.navigate('List')}/>
        <Separator />
        <Button title="Image Screen" onPress={() => navigation.navigate('ImageScreen')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  },
  subTitle: {
    fontSize: 20
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});


export default HomeScreen;
