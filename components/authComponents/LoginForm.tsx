import { StyleSheet, Alert } from "react-native";
import React, { useRef, useState } from "react";
import { Button, Form, Input, Label, View } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { supabase } from "@/supabase";
// import { CampContextInterface } from "@/app/interfaces/CampContextInterface";
import { FormInterface } from "@/app/interfaces/SignupFormInterface";

const LoginForm = (props: FormInterface) => {
  const colorScheme = props.colorScheme;
  const email = useRef<string>("");
  const password = useRef<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email.current,
      password: password.current,
    });

    if (error) {
      Alert.alert(error.message);
    }
    else{
      props.navigation.navigate('(tabs)')
    }
    setLoading(false);
  }

  return (
    <View>
      <Form onSubmit={() => {}}>
        <View>
          <Label>Email Address</Label>
          <Input
            borderWidth={0}
            style={styles.input}
            textContentType="emailAddress"
            size={"$xl"}
            onChangeText={(e) => (email.current = e)}
            keyboardType="email-address"
            placeholder="Eg. johnmathew@email.com"
            placeholderTextColor={
              colorScheme === "dark" ? "#909090" : "#404040"
            }
            backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
          />
        </View>
        <View height={"$small"} />
        <View>
          <Label>Password</Label>
          <Input
            borderWidth={0}
            style={styles.input}
            size={"$xl"}
            onChangeText={(e) => (password.current = e)}
            secureTextEntry
            placeholder="Enter a secure password."
            placeholderTextColor={
              colorScheme === "dark" ? "#909090" : "#404040"
            }
            backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
          />
        </View>
        <View height={"$large"} />
        <Button
          circular
          size={"$3"}
          alignSelf="flex-end"
          onPress={signInWithEmail}
          style={styles.startButton}
          pressStyle={{ backgroundColor: "$black" }}
          icon={<Ionicons name="arrow-forward" size={25} />}
        />
      </Form>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  label: {
    fontFamily: "PoppinsRegular",
  },
  startButton: {
    backgroundColor: "#f4bb44",
    padding: 10,
  },
  input: {
    fontFamily: "PoppinsRegular",
    borderRadius: 10,
    fontSize: 16,
  },
});
