import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
var locked = true;
const status = [];
var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const unlockPress = () => {
  if (locked) {
    status.push(date + "-" + time + ":" + "Unlocked\n");
    locked = false;
  } else {
    status.push(date + "-" + time + ":" + "Locked\n");
    locked = true;
  }
};

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  //Welcome onpress

  //View -> UIView
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Sign In" component={signIn} />
        <Stack.Screen name="Sign Up" component={signUp} />
        <Stack.Screen name="Manage Users" component={manageUsers} />
        <Stack.Screen name="Manage Locks" component={manageLocks} />
        <Stack.Screen name="Settings" component={settingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  lockLogoAdmin: {
    width: 500,
    height: 500,
    bottom: 0,
    alignItems: "center",
  },
  containerAdmin: {
    flex: 1,
    padding: 20,
  },
  userIcon: {
    width: 100,
    height: 100,
    padding: 20,
    margin: 10,
  },
  navBar: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "lightblue",
    borderWidth: 2,
    borderColor: "black",
  },
  navBarTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightblue",
    borderWidth: 2,
    borderColor: "black",
  },
  titleTop: {
    color: "black",
    fontSize: 36,
    textAlign: "center",
    margin: 20,
    textShadowColor: "lightblue",
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  banner: {
    width: Dimensions.get("window").width,
    borderWidth: 1,
  },

  logs: {
    color: "black",
    fontSize: 20,
    padding: 5,
    fontWeight: "bold",
    fontFamily: "HelveticaNeue-Bold",
  },
  buttonHome: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    paddingHorizontal: 24,
    borderRadius: 4,
    borderWidth: 2,
    elevation: 3,
    backgroundColor: "lightblue",
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>IoT Smart Doorbell</Text>
        </ImageBackground>
      </SafeAreaView>

      <SafeAreaView style={{ flex: 4, backgroundColor: "white" }}>
        {/*<TouchableOpacity onPress={() => console.log("tap")}>
        <Image
          source={{
            width: 320,
            height: 320,
            uri: "data:image/png;base64,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",
          }}
        ></Image>
        </TouchableOpacity> */}

        <Pressable
          style={[styles.buttonHome]}
          title="Scan Face"
        >
          <Text style={[styles.buttonText]}>Scan Face</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonHome]}
          title="Sign Up"
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={[styles.buttonText]}>Sign Up</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonHome]}
          title="Sign In"
          onPress={() => navigation.navigate("Sign In")}
        >
          <Text style={[styles.buttonText]}>Sign In</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonHome]}
          title="Go to Admin Page"
          onPress={() => navigation.navigate("Admin")}
        >
          <Text style={[styles.buttonText]}>Admin Page</Text>
        </Pressable>

        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaView>
  );
};
const AdminScreen = ({ navigation, route }) => {
  let text = status.toString();
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>Logs</Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 4, backgroundColor: "white" }}>
        <Text style={[styles.logs]}>{text}</Text>
      </SafeAreaView>

      <SafeAreaView style={[styles.navBar]}>
        <TouchableOpacity onPress={() => navigation.navigate("Manage Users")}>
          <Image style={styles.userIcon} source={require("./usericon.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Manage Locks")}>
          <Image style={styles.userIcon} source={require("./lockicon.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image style={styles.userIcon} source={require("./settings.png")} />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};
const settingsScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>Settings</Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 6, backgroundColor: "white" }}>
        <Pressable
          style={[styles.buttonHome]}
          title="Go to Admin Page"
          onPress={() => navigation.navigate("Admin")}
        >
          <Text style={[styles.buttonText]}>Log Out</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};
const signIn = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>Sign-In</Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 6, backgroundColor: "white" }}
      ></SafeAreaView>
    </SafeAreaView>
  );
};

const signUp = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>Sign-Up</Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 6, backgroundColor: "white" }}
      ></SafeAreaView>
    </SafeAreaView>
  );
};

const manageUsers = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>Manage Users</Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView
        style={{ flex: 6, backgroundColor: "white" }}
      ></SafeAreaView>
    </SafeAreaView>
  );
};
const manageLocks = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={[
        styles.containerAdmin,
        {
          flexDirection: "column",
        },
      ]}
    >
      <SafeAreaView style={[styles.navBarTop]}>
        <ImageBackground
          source={require("./bluebanner.jpg")}
          style={styles.banner}
        >
          <Text style={[styles.titleTop]}>Manage Locks</Text>
        </ImageBackground>
      </SafeAreaView>
      <SafeAreaView style={{ flex: 6, backgroundColor: "white" }}>
        <Pressable
          style={[styles.buttonHome]}
          title="Toggle Lock"
          onPress={checkStatus}
        >
          <Text style={[styles.buttonText]}>Get Lock Status</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonHome]}
          title="Sign Up"
          onPress={() => navigation.navigate("Admin")}
        >
          <Text style={[styles.buttonText]}>Back</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaView>
  );
};
const checkStatus = () => {
  //var cred=btoa("admin:Capstone-Group-29");
  const x = "YWRtaW46Q2Fwc3RvbmUtR3JvdXAtMjk=";
  var request = new XMLHttpRequest()
  url = "https://validation--api.herokuapp.com/status/lock1/"
  request.open("GET", url, true)
  request.setRequestHeader("Authorization", "Basic " + x)
  request.send(null)
  var response = request.responseText
  console.log(response);
};