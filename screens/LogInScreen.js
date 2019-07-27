import React, { Component } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import Button from "../components/Buttons/CustomButton";
import SearchBar from "../components/CustomSearchInput";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export default class LogIn extends Component {
  state = {
    email: null,
    password: null,
    err: ""
  };

  onEmailInputChange = email => {
    this.setState({ email, err: "" });
  };

  onPasswordInputChange = password => {
    this.setState({ password, err: "" });
  };

  onError = err => {
    this.setState({ err: "Check your email or password" });
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/images/icon.png")}
          />
        </View>

        <View style={styles.textInputContainer}>
          <SearchBar
            iconName="mail"
            keyboardType="email-address"
            placeholder="example@email.com"
            value={this.state.email}
            onChangeText={this.onEmailInputChange}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.textInputContainer}>
          <SearchBar
            iconName="lock"
            placeholder="Enter your password"
            value={this.state.password}
            onChangeText={this.onPasswordInputChange}
            secureTextEntry
          />
        </View>

        <Text>{this.state.err}</Text>

        <Button
          theme="dark"
          customStyle={{ marginTop: 15 }}
          caption="Login"
          onPress={() => this.props.navigation.navigate("Main")}
        />

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.center}
            onPress={() => this.props.navigation.navigate("Main")}
          >
            <Text style={{ color: Colors.secondaryColor }}>Skip Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.center}>
            <Text style={{ color: Colors.secondaryColor }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.center}
          onPress={() => this.props.navigation.navigate("signUp")}
        >
          <Text style={{ color: Colors.secondaryColor }}>
            Not a user? Sign Up
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

LogIn.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    margin: Layout.screenMargin,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  textInputContainer: {
    marginBottom: 10
  },
  center: {
    alignItems: "center",
    marginTop: 20
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
