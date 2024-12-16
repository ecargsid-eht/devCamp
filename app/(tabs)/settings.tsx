import { StyleSheet} from 'react-native'
import {Text,View} from 'tamagui'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '@/components/TopBar';
import { supabase } from '@/supabase';

const Settings = () => {
  const onSignOut = async() => {
    const {error} = await supabase.auth.signOut()
  }
  return (
    <SafeAreaView>
      <View style={{ margin: 15 }}>
        <TopBar name="Settings" />
        <View height={"$medium"} />
        <Text onPress={() => onSignOut()} >Sign Out</Text>
      </View>
    </SafeAreaView>
  );
}

export default Settings

const styles = StyleSheet.create({})