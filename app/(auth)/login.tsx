import { StyleSheet } from 'react-native'
import { ScrollView, Text, View, YStack} from 'tamagui';
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/BackButton';
import { useNavigation } from 'expo-router';
import { CampContext } from '../ctx/CampContext';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import LoginForm from '@/components/authComponents/LoginForm';

const Login = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const {colorScheme} = useContext(CampContext);
  return (
    <SafeAreaView>
      <ScrollView style={{ margin: 15 }}>
        <BackButton navigation={navigation} colorScheme={colorScheme} />
        <View height={"$xxl"} />
        <YStack style={styles.textContainer}>
          <Text
            style={{ fontFamily: "PoppinsBold", fontSize: 30 }}
            textAlign="center"
          >
            Login to your Account.
          </Text>
          <Text
            style={{ fontFamily: "Playwrite", fontSize: 16 }}
            textAlign="center"
          >
            Enter your details to login.
          </Text>
        </YStack>
        <View height={"$xl"} />
        <LoginForm colorScheme={colorScheme} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});