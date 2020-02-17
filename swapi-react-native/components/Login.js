import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';

import styles from '../src/styles/styles';

export default class Login extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../images/back.png')}
        style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../images/logo1.png')} />
        </View>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled>
          <TextInput style={styles.input} placeholder="Enter your email" />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter your password"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('Welcome');
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}
