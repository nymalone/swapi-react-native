import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Button,
} from 'react-native';

import styles from '../src/styles/styles';

export default class CharacterDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground
        source={require('../images/back.png')}
        style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../images/logo1.png')} />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>
            <b>Name:</b> {this.props.navigation.state.params.name}
            <br />
            <b>Birth Year:</b> {this.props.navigation.state.params.birth_year}
            <br />
            <b>Gender:</b> {this.props.navigation.state.params.gender}
            <br />
            <b>Height:</b> {this.props.navigation.state.params.height}
            <br />
            <b>Mass:</b> {this.props.navigation.state.params.mass}
            <br />
            <b>Hair Color:</b> {this.props.navigation.state.params.hair_color}
            <br />
            <b>Eye Color:</b> {this.props.navigation.state.params.eye_color}
            <br />
            <b>Skin Color:</b> {this.props.navigation.state.params.skin_color}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            this.props.navigation.navigate('Welcome');
          }}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

CharacterDetail.navigationOptions = {
  headerShown: false,
};
