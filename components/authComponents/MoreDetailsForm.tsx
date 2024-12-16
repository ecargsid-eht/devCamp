import { ScrollView, StyleSheet, ToastAndroid } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Avatar,
  Button,
  Form,
  Input,
  Label,
  Text,
  TextArea,
  View,
} from "tamagui";
import { Octicons } from "@expo/vector-icons";
import SwitchChip from "../SwitchChip";
import { supabase } from "@/supabase";
import { FormInterface } from "@/app/interfaces/SignupFormInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MoreDetailsForm = (props: FormInterface) => {
  const { colorScheme } = props;
  const username = useRef<string>("");
  const bio = useRef<string>("");
  const [interests, setInterest] = useState<string[]>([]);

  const onChoiceSelect = (choice: string) => {
    setInterest((prev) => {
      if (!prev.includes(choice)) {
        if (interests.length === 5) {
          ToastAndroid.show(
            "You can only select upto 5 interests.",
            ToastAndroid.SHORT
          );
          return prev;
        }
        return [...prev, choice];
      } else {
        return prev.filter((ch) => ch !== choice);
      }
    });
  };

  const onSubmitForm = async () => {
    if (
      username.current.trim().length > 0 &&
      bio.current.trim().length > 0 &&
      interests.length > 0
    ) {
      const { data, error } = await supabase.auth.updateUser({
        data: {
          username: username.current,
          bio: bio.current,
          interests: interests,
        },
      });

      if (error) {
        console.log(error);
      } else {
        AsyncStorage.setItem(
          "user",
          JSON.stringify(data.user.user_metadata) || "{}"
        );
        props.navigation.navigate("(tabs)");
      }
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Form onSubmit={() => onSubmitForm()}>
          <View style={{ alignItems: "center", position: "relative" }}>
            <Avatar circular size={"$xxl"}>
              <Avatar.Image
                blurRadius={20}
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              />
            </Avatar>
            <Button
              position="absolute"
              style={{ backgroundColor: "transparent" }}
              top={"40%"}
              icon={<Octicons name="pencil" size={30} />}
            />
          </View>
          <View height={"$medium"} />
          <View>
            <Label>Choose a username.</Label>
            <Input
              borderWidth={0}
              style={styles.input}
              textContentType="emailAddress"
              size={"$xl"}
              onChangeText={(e) => (username.current = e)}
              keyboardType="default"
              placeholder="Eg - campmaster123"
              placeholderTextColor={
                colorScheme === "dark" ? "#909090" : "#404040"
              }
              backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
            />
            <Text style={{ fontFamily: "PoppinsLight", fontSize: 10 }}>
              *The username should be at least 5 characters long.
            </Text>
            <View height={"$small"} />
            <Label>Update your bio.</Label>
            <TextArea
              backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
              placeholderTextColor={
                colorScheme === "dark" ? "#909090" : "#404040"
              }
              borderWidth={0}
              onChangeText={(e) => (bio.current = e)}
              style={styles.postArea}
              numberOfLines={3}
              placeholder="Write something that interests people..."
            />
            <View height={"$small"} />
            <Label>Select your interests. (upto 5)</Label>
            <SwitchChip
              choiceType="multiple"
              choices={[
                "Art",
                "Business",
                "Entertainment",
                "Family",
                "Fitness",
                "Food",
                "Hobbies",
                "Home",
                "Music",
                "News",
                "Personal",
                "Science",
                "Shopping",
                "Sports",
                "Travel",
              ]}
              colorScheme={colorScheme}
              selectedChoice={interests}
              onChoiceSelect={(ch) => onChoiceSelect(ch)}
            />
            <View height={"$large"} />
            <Form.Trigger asChild>
              <Button
                style={styles.startButton}
                pressStyle={{ backgroundColor: "$black" }}
                textProps={{
                  style: {
                    fontFamily: "PoppinsBold",
                    fontSize: 30,
                    verticalAlign: "center",
                  },
                }}
              >
                Let's go.
              </Button>
            </Form.Trigger>
          </View>
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreDetailsForm;

const styles = StyleSheet.create({
  label: {
    fontFamily: "PoppinsRegular",
  },
  startButton: {
    borderRadius: 10,
    backgroundColor: "#f4bb44",
    height: "auto",
    marginHorizontal: 20,
  },
  input: {
    fontFamily: "PoppinsRegular",
    borderRadius: 10,
    fontSize: 16,
  },
  postArea: {
    borderRadius: 10,
    fontFamily: "PoppinsRegular",
    textAlignVertical: "top",
  },
});
