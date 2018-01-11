import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
// import { Link } from 'react-router-dom';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: 'Login'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../photos/instagram.png")}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="username"
            placeholderTextColor="rgba(255, 255, 255, 0.7 )"
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="rgba(255, 255, 255, 0.7 )"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.options}>Forgot your login details?</Text>
          <Text>Get help signing in </Text>
          <Text>----------OR----------</Text>
          <View style={styles.facebookOption}>
            <Image
              style={styles.facebookLogo}
            />
            <Text style={styles.facebookText}>Log in with Facebook</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e74c3c'
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    height: 30,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    // opacity: 0.2,
    backgroundColor: 'rgba(255, 255, 255, 0.1 )',
    color: 'white',
    paddingHorizontal: 10,

  },
  button: {
    borderRadius: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.0 )',
    borderColor: 'rgba(255, 255, 255, 0.2 )',
    borderWidth: 0.5,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingVertical: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6 )'
  },
  options: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.6 )'
  }
})