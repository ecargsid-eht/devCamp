import { StyleSheet } from "react-native";
import React from "react";
import { Card, View, Text, XStack } from "tamagui";

const SwitchChip = (props: SwitchChipInterface) => {
    async function selectChoice(choice: string){
        props.onChoiceSelect(choice);
    }
  return (
    <XStack flexWrap="wrap">
      {props.choices.map((choice, i) => (
        <Card
          key={i}
          paddingHorizontal={"$small"}
          paddingVertical={3}
          onPress={() => selectChoice(choice)}
          style={{ borderRadius: 0, margin: 3 }}
          backgroundColor={
            props.selectedChoice.includes(choice)
              ? "#f4bb44"
              : props.colorScheme === "dark"
              ? "#303030"
              : "#f5f5f5"
          }
        >
          <Text style={{ fontFamily: "PlaywriteLight" }} textAlign="center">
            {choice}
          </Text>
        </Card>
      ))}
    </XStack>
  );
};

export default SwitchChip;

const styles = StyleSheet.create({});
