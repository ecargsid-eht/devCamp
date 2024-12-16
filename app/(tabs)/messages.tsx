import { StyleSheet } from 'react-native'
import {View,Text, Input, XStack, Separator} from 'tamagui'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopBar from '@/components/TopBar'
import { CampContext } from '../ctx/CampContext'

const Messages = () => {
  const [searchKey,setSearchKey] = useState<string>("");
  const {colorScheme} = useContext(CampContext)
  return (
    <SafeAreaView>
      <View style={{ margin: 15 }}>
        <TopBar name="Messages" />
        <Input
          borderWidth={0}
          onChangeText={(text) => setSearchKey(() => text.toString())}
          backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
          borderRadius={10}
          placeholder="Search in chats..."
          style={{ fontFamily: "PoppinsRegular" }}
          size={"$large"}
          placeholderTextColor={colorScheme === "dark" ? "gray" : "#404040"}
        />
        <View height={"$small"} />
        <XStack gap={10} alignItems="center">
          <Text
            style={{ fontFamily: "PoppinsRegular" }}
            color={colorScheme === "dark" ? "gray" : "#404040"}
          >
            Your Chats
          </Text>
          <Separator
            borderColor={colorScheme === "dark" ? "gray" : "#404040"}
            borderWidth={0.2}
          />
        </XStack>
        <View height={"$medium"} />
      </View>
    </SafeAreaView>
  );
}

export default Messages

const styles = StyleSheet.create({})