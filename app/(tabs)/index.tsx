import { StyleSheet } from "react-native";
import { Avatar, Text, View, Image, XStack } from "tamagui";
import { SafeAreaView } from "react-native-safe-area-context";
import WritePost from "../../components/WritePost";
import { FlatList } from "react-native";
import FeedPost from "../../components/FeedPost";
import { useCallback, useContext, useEffect, useState } from "react";
import { CampContext } from "../ctx/CampContext";

export default function HomeScreen() {
  const {colorScheme} = useContext(CampContext);
  const [feed, setFeed] = useState<any>([])

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(async (res) => {
        const data = await res.json();
        setFeed(() => data.posts);
      })
  },[])

  const renderItem = useCallback(
    ({ item, index }:{item:any, index:any}) => (
      <FeedPost
        user={"ecargsid_eht"}
        postCaption={item.body}
        key={index}
        colorScheme={colorScheme}
      />
    ),
    []
  );

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <XStack gap={5}>
            <Image
              source={{
                uri: require("@/assets/images/logocamp.png"),
                width: 30,
                height: 30,
              }}
            />
            <Text style={{ fontFamily: "PoppinsBold", fontSize: 22 }}>
              Camp
            </Text>
          </XStack>
          <Avatar circular size="$medium">
            <Avatar.Image
              src={
                "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
              }
            />
          </Avatar>
        </View>
        <FlatList
          ListHeaderComponent={
            <>
              <WritePost colorScheme={colorScheme} />
              <View height={1} />
            </>
          }
          data={feed}
          initialNumToRender={5}
          refreshing={false}
          onRefresh={() => console.log("refreshing")}
          maxToRenderPerBatch={5}
          windowSize={5}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
