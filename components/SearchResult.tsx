import { StyleSheet} from 'react-native'
import { Button, Text, View } from 'tamagui'
import React, { memo, useState } from 'react'
import { Avatar, XStack } from 'tamagui'
import { SearchUserInterface } from '@/app/interfaces/SearchUserInterface'

const SearchResult = (props:SearchUserInterface) => {
    const [following,setFollowing] = useState<boolean>(false)
  return (
    <XStack alignItems="center" justifyContent="space-between">
      <XStack gap={10} alignItems="center">
        <Avatar circular size="$large">
          <Avatar.Image
            src={
              "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            }
          />
        </Avatar>
        <View>
          <Text style={{ fontFamily: "PoppinsRegular" }}>{props.firstName + " " + props.lastName}</Text>
          <Text style={{ fontFamily: "PoppinsExtraLight" }}>@ecargsid_eht</Text>
        </View>
      </XStack>
      <Button
        size={"$3"}
        onPress={() => setFollowing((prev) => !prev)}
        style={styles.followButton}
      >
        {following ? (
          <Text style={{ color: "#f4bb44", fontFamily: "PoppinsSemiBold" }}>
            Following
          </Text>
        ) : (
          <Text style={{ fontFamily: "PoppinsSemiBold" }}>Follow</Text>
        )}
      </Button>
    </XStack>
  );
}

export default memo(SearchResult)

const styles = StyleSheet.create({
  followButton:{
    fontFamily:"PoppinsRegular",
  }
});