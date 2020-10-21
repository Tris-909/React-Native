import React from "react";
import {View, Text, StyleSheet, Button } from "react-native";

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
        <Button title="Image Tag and Re-usable Components" onPress={() => navigation.navigate('ImageScreen')}/>
        <Separator />
        <Button title="First State App" onPress={() => navigation.navigate('Counter')} />
        <Separator />
        <Button title="Color Generators" onPress={() => navigation.navigate('ColorSelect')} />
        <Separator />
        <Button title="Color Changer" onPress={() => navigation.navigate('ThirdStateApp')} />
        <Separator />
        <Button title="Text Input State" onPress={() => navigation.navigate('TextInput')} />
        <Separator />
        <Button title="Box Screen" onPress={() => navigation.navigate('BoxScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: 'center'
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
