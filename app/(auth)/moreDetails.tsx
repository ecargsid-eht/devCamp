import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext } from 'react'
import BackButton from '@/components/BackButton';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { CampContext } from '../ctx/CampContext';
import { View, YStack, Text } from 'tamagui';
import MoreDetailsForm from '@/components/authComponents/MoreDetailsForm';

const MoreDetails = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { colorScheme } = useContext(CampContext);
  return (
    <SafeAreaView>
      <ScrollView style={{ margin: 15 }}>
        <BackButton navigation={navigation} colorScheme={colorScheme} />
        <View height={"$small"} />
        <YStack style={styles.textContainer}>
          <Text style={{ fontFamily: "PoppinsBold", fontSize: 28 }}>
            Complete your Profile
          </Text>
          <View height={"$small"} />
          <Text style={{ fontFamily: "PlaywriteLight", fontSize: 16 }}>
            A few final steps to make a comfy place for you in the camp. Let's do it.
          </Text>
        </YStack>
        <MoreDetailsForm colorScheme={colorScheme} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MoreDetails

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});