import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          borderRadius: 15,
          position: "absolute",
          margin: 10,
          marginBottom: 5,
          borderColor: colorScheme === "dark" ? "#fff" : "#202020",
          borderWidth: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"
              }
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused ? "notifications" : "notifications-outline"
              }
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={
                focused ? "settings" : "settings-outline"
              }
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
