import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'tamagui';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

interface BackButtonInterface {
  navigation: NavigationProp<ParamListBase>,
  colorScheme: string
}

const BackButton = (props:BackButtonInterface) => {
  return (
    <Button
      circular
      alignSelf={"flex-start"}
      onPress={() => props.navigation.goBack()}
      style={{
        borderWidth: 2,
        borderColor: props.colorScheme === "dark" ? "#fff" : "#000",
      }}
      icon={<Ionicons name="arrow-back" size={25} />}
    />
  );
}

export default BackButton

const styles = StyleSheet.create({})