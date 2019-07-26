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

export default class SignUp extends Component {
  state = {
    email: null,
    password: null,
    confirmedPassword: null,
    err: "",
    isOK: false
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

  checkPassEquality = confirmedPassword => {
    if (this.state.password === confirmedPassword) {
      this.setState({ confirmedPassword, isOK: true, err: "" });
    } else {
      this.setState({
        confirmedPassword,
        isOk: false,
        err: "Passwrods are not identical"
      });
    }
  };

  onSubmit = () => {
    if (this.state.isOK) {
      this.props.navigation.navigate("Main");
    }
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

        <View style={styles.textInputContainer}>
          <SearchBar
            iconName="lock"
            placeholder="Enter your password again"
            value={this.state.confirmedPassword}
            onChangeText={this.checkPassEquality}
            secureTextEntry
          />
        </View>

        <Text>{this.state.err}</Text>

        <Button
          theme="dark"
          customStyle={{ marginTop: 15 }}
          caption="Sign Up"
          onPress={this.onSubmit}
        />
      </ScrollView>
    );
  }
}

SignUp.navigationOptions = {
  title: "Sign Up"
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
  }
});
