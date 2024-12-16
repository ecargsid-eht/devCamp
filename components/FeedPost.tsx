import { StyleSheet } from 'react-native'
import { Text,  Avatar, XStack, View, Button, Separator} from 'tamagui';
import React, { memo, useState } from 'react'
import { StyledCard } from '@/styled/StyledCard';
import { Ionicons } from '@expo/vector-icons';
import { FeedPostInterface } from '@/app/interfaces/FeedPostInterface';



const FeedPost = (props: FeedPostInterface) => {
  const {colorScheme} = props;
  const [like, setLike] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  return (
    <StyledCard borderWidth={colorScheme === "dark" ? 0.2 : 0.3}>
      <XStack gap={8} style={styles.postHeader}>
        <Avatar circular size="$medium">
          <Avatar.Image
            src={
              "https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            }
          />
        </Avatar>
        <View>
          <Text style={{ fontFamily: "PoppinsSemiBold", fontSize: 13 }}>
            @ecargsid_eht
          </Text>
          <Text style={{ fontFamily: "PoppinsThin", fontSize: 12 }}>
            15 mins ago
          </Text>
        </View>
      </XStack>
      <View height={2} />
      <Text style={{ fontFamily: "PoppinsRegular" }}>
        {props.postCaption}
      </Text>
      <View height={2} />
      <XStack justifyContent="space-between">
        <XStack>
          <Button
            circular
            size={"$3"}
            style={styles.likeButton}
            onPress={() => setLike((prevState) => !prevState)}
            icon={
              <Ionicons
                name={like === false ? "heart-outline" : "heart"}
                size={26}
              />
            }
          >
            <Text>12.4K</Text>
          </Button>
          <View width={10} />
          <Button
            circular
            size={"$3"}
            style={styles.likeButton}
            icon={
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={25}
                style={{ padding: 0, margin: 0 }}
              />
            }
          >
            <Text>182</Text>
          </Button>
        </XStack>
        <Button
          circular
          size={"$3"}
          onPress={() => setBookmarked((prevState) => !prevState)}
          style={styles.bookmarkButton}
          icon={
            <Ionicons
              name={bookmarked === false ? "bookmark-outline" : "bookmark"}
              size={25}
              style={{ padding: 0, margin: 0 }}
            />
          }
        ></Button>
      </XStack>
    </StyledCard>
  );
};

export default memo(FeedPost);

const styles = StyleSheet.create({
  postHeader: {
    // flexDirection:"row",
    alignItems: "center",
  },
  likeButton: {
    fontFamily: "PoppinsLight",
    borderWidth: 0.7,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  bookmarkButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});