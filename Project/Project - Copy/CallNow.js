import React from "react";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  item,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Clipboard from "expo-clipboard";

export default function CallNow({ navigation }) {
  const [data, setdata] = useState();
  const route = useRoute();
  useEffect(() => {
    console.log(route.params);
  }, []);

  // Access the data passed from ScreenA
  const dataFromScreenA = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>Hi, User!</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
            >
              <View style={styles.avatar}>
                <Image
                  alt=""
                  source={{
                    uri: "__",
                  }}
                  style={styles.avatarImg}
                />

                <View style={styles.avatarNotification} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.balance}>
            <Text style={styles.balanceTitle}>Long Press to copy And call</Text>
            <TouchableOpacity onPress={""}>
              <Text style={styles.balanceValue}>08036826583</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.send}>
            <Text style={styles.sendTitle}></Text>

            <ScrollView
              contentContainerStyle={styles.sendScroll}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* {items.map(({ img, name }, index) => {
                return ( */}
              <TouchableOpacity
                // key={index}
                onPress={() => {
                  // handle onPress
                }}
              >
                <View style={styles.sendUser}>
                  <Image
                    alt=""
                    source={{ uri: "img" }}
                    style={styles.sendUserAvatar}
                  />

                  <Text style={styles.sendUserName}>{"___"}</Text>
                </View>
              </TouchableOpacity>
              {/* );
              })} */}
            </ScrollView>
          </View>

          <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>
              {/* Replace with your content */}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  balance: {
    backgroundColor: "#007aff",
    borderRadius: 24,
    marginTop: 32,
    paddingVertical: 20,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  balanceValue: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginTop: 8,
  },
  send: {
    marginVertical: 32,
  },
  sendTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  sendScroll: {
    marginHorizontal: -8,
  },
  sendUser: {
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  sendUserAvatar: {
    width: 54,
    height: 54,
    borderRadius: 9999,
    marginBottom: 6,
  },
  sendUserName: {
    fontSize: 15,
    color: "#1e1e1e",
    fontWeight: "500",
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBadge: {
    fontSize: 15,
    fontWeight: "400",
    color: "#a3a3a3",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "600",
    color: "#121212",
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 0,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: "#e5e7eb",
    borderStyle: "dashed",
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  avatar: {
    position: "relative",
  },
  avatarImg: {
    width: 48,
    height: 48,
    borderRadius: 9999,
  },
  avatarNotification: {
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#fff",
    top: 0,
    right: -2,
    width: 14,
    height: 14,
    backgroundColor: "#d1d5db",
  },
});
