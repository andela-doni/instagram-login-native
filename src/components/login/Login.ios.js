import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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
      <KeyboardAvoidingView behaviour="padding" style={styles.container}>
        <View style={{ flex: .95 }}>
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
              returnKeyType="next"
              placeholderTextColor="rgba(255, 255, 255, 0.7 )"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCorrect={false}
            />
            <TextInput
              placeholder="password"
              returnKeyType="next"
              placeholderTextColor="rgba(255, 255, 255, 0.7 )"
              style={styles.input}
              ref={(input) => this.passwordInput = input}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.options}>Forgot your login details? <Text style={styles.alt}>Get help signing in </Text>{'\n'}</Text>
            <Text style={styles.mdash}>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;<Text style={styles.alt}>OR</Text>&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;{'\n'}</Text>
            <View style={styles.facebookOption}>
              <View>
                <Image
                  style={styles.facebookLogo}
                  source={require("../../../photos/facebook-logo-png-white-i6.png")}
                />
              </View>
              <View><Text style={styles.options}>Log in <Text style={styles.facebookText}>with Facebook</Text></Text></View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.noAccount} >Don't have an account?<Text style={styles.signup}>Signup</Text></Text>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2205d'
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
  },
  mdash: {
    color: 'rgba(255, 255, 255, 0.6 )',
    textAlign: 'center',
  },
  alt: {
    color: 'rgba(255, 255, 255, 0.6 )',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  facebookOption: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  facebookText: {
    color: 'rgba(255, 255, 255, 0.6 )',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  facebookLogo: {
    width: 30,
    height: 20,
    alignItems: 'center',
  },
  footer: {
    borderColor: 'rgba(255, 255, 255, 0.2 )',
    flex: .05,
    alignItems: 'center'
  },
  noAccount: {
    color: 'rgba(255, 255, 255, 0.6 )',
  },
  signup: {
    fontWeight: 'bold'
  }

})