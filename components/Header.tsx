import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {};

const Header = (props: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userinfo}>
        <Image
          source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
          style={styles.userImg}
        />

        <View style={{ gap: 3 }}>
          <Text style={styles.welcomtxt}>Welcome</Text>
          <Text style={styles.usertxt}>John Doe</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  userImg: { width: 50, height: 50, borderRadius: 30 },
  userinfo: { flexDirection: "row", alignItems: "center", gap: 10 },
  welcomtxt: { fontSize: 12, color: Colors.black },
  usertxt: { fontSize: 14, fontWeight: "700", color: Colors.black },
});
