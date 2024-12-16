import { StyleSheet } from "react-native";
import React from "react";
import { TextArea, Text, View, Button, XStack } from "tamagui";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyledCard } from "@/styled/StyledCard";
import { CampContextInterface } from "@/app/interfaces/CampContextInterface";


const WritePost = (props:CampContextInterface) => {
  const {colorScheme} = props;
  return (
    <StyledCard
      style={{ paddingBottom: 5 }}
      borderWidth={colorScheme === "dark" ? 0.2 : 0.3}
    >
      <Text style={{ fontFamily: "Playwrite", fontSize: 14 }}>
        Have a thought? Let's share.
      </Text>
      <TextArea
        backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
        placeholderTextColor={colorScheme === "dark" ? "gray" : "#404040"}
        borderWidth={0}
        style={styles.postArea}
        placeholder="Share your thoughts..."
      />
      <XStack justifyContent="space-between" alignItems="center">
        <XStack gap={10}>
          <Button
            circular
            size={"$3"}
            backgroundColor={colorScheme === "dark" ? "#303030" : "#fceac6"}
            style={styles.optionButton}
            icon={
              <MaterialCommunityIcons name="poll" color={"#447df4"} size={25} />
            }
          ></Button>
          <Button
            circular
            size={"$3"}
            backgroundColor={colorScheme === "dark" ? "#303030" : "#fceac6"}
            style={styles.optionButton}
            icon={<Ionicons name="images" color={"#bb44f4"} size={25} />}
          ></Button>
        </XStack>
        <Button
          circular
          size={"$3"}
          style={styles.createButton}
          icon={<Ionicons name="send" color={"#f4bb44"} size={25} />}
        ></Button>
      </XStack>
    </StyledCard>
  );
};

export default WritePost;

const styles = StyleSheet.create({
  postArea: {
    borderRadius: 20,
    fontFamily: "PoppinsRegular",
    textAlignVertical: "top",
  },
  createButton: {
    alignSelf: "flex-end",
    padding: 8,
  },
  optionButton: {
    alignSelf: "flex-end",
    padding: 6,
  },
});
