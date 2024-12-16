import { StyleSheet} from 'react-native'
import React from 'react'
import { Image, Text, View, XStack } from 'tamagui';

const TopBar = ({name}:{name:string}) => {
  return (
    <>
      <XStack gap={5}>
        <Image
          source={{
            uri: require("@/assets/images/logocamp.png"),
            width: 30,
            height: 30,
          }}
        />
        <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 22 }}>
          {name}
        </Text>
      </XStack>
      <View height={10} />
    </>
  );
}

export default TopBar

const styles = StyleSheet.create({})