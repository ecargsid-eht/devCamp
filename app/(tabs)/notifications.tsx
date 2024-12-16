import { StyleSheet} from "react-native";
import {Separator, Text, View,XStack } from 'tamagui';
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "@/components/TopBar";
import { Input } from "tamagui";
import { CampContext } from "../ctx/CampContext";

const Notifications = () => {
  const {colorScheme} = useContext(CampContext)
  return (
    <SafeAreaView>
      <View style={{ margin: 15 }}>
        <TopBar name="Notifications" />
        <View height={"$medium"} />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
