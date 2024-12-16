import { useCallback, useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, XStack, Image, Input, Separator, Spinner } from "tamagui";
import { CampContext } from "../ctx/CampContext";
import SearchResult from "@/components/SearchResult";
import { SearchUserInterface } from "../interfaces/SearchUserInterface";
import TopBar from "@/components/TopBar";

export default function ExploreScreen() {
  const { colorScheme } = useContext(CampContext);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchUsers, setSearchUsers] = useState<SearchUserInterface[]>([]);
  const [searchKey, setSearchKey] = useState<string>("");

  function searchUser() {
    searchKey !== ""
      ? fetch(`http://dummyjson.com/users/search?q=${searchKey}`)
          .then(async (res) => {
            const users = await res.json();
            setSearchUsers(() => users.users);
          })
          .then(() => setIsSearching(false))
      : setSearchUsers([]);
    setIsSearching(false);
  }

  useEffect(() => {
    if (searchKey !== "") {
      setIsSearching(true);
      const delaySearch = setTimeout(() => {
        searchUser();
      }, 1000);
    }
  }, [searchKey]);

  const renderItem = useCallback(
    ({ item, index }: { item: any; index: any }) => (
      <SearchResult
        firstName={item.firstName}
        lastName={item.lastName}
        key={index}
      />
    ),
    []
  );

  return (
    <SafeAreaView>
      <View style={{ margin: 15 }}>
        <TopBar name="Explore" />
        <Input
          borderWidth={0}
          onChangeText={(text) => setSearchKey(() => text.toString())}
          backgroundColor={colorScheme === "dark" ? "#303030" : "#f5f5f5"}
          borderRadius={10}
          placeholder="Explore the camp..."
          style={{ fontFamily: "PoppinsRegular" }}
          size={"$large"}
          placeholderTextColor={colorScheme === "dark" ? "gray" : "#404040"}
        />
        <View height={"$small"} />
        {searchKey === "" ? (
          <>
            <XStack gap={10} alignItems="center">
              <Text
                style={{ fontFamily: "PoppinsRegular" }}
                color={colorScheme === "dark" ? "gray" : "#404040"}
              >
                Suggestions for you
              </Text>
              <Separator
                borderColor={colorScheme === "dark" ? "gray" : "#404040"}
                borderWidth={0.2}
              />
            </XStack>
            <View height={"$medium"} />
          </>
        ) : searchUsers.length === 0 ? (
          <Spinner size="large" color={"#f4bb44"} />
        ) : (
          <>
            <XStack gap={10} alignItems="center">
              <Text
                style={{ fontFamily: "PoppinsRegular" }}
                color={colorScheme === "dark" ? "gray" : "#404040"}
              >
                Search Results ({searchUsers.length})
              </Text>
              <Separator
                borderColor={colorScheme === "dark" ? "gray" : "#404040"}
                borderWidth={0.2}
              />
            </XStack>
            <View height={"$medium"} />
            <FlatList
              data={searchUsers}
              renderItem={renderItem}
              initialNumToRender={10}
              maxToRenderPerBatch={5}
              windowSize={5}
              ItemSeparatorComponent={
                <>
                  <View height={"$small"} />
                </>
              }
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
