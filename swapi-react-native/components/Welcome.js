import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Header,
  Item,
  Input,
  Icon,
  Button,
} from 'react-native';

import axios from 'axios';

import styles from '../src/styles/styles';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  loadCharacters = () => {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results || [],
        });
      });
  };

  componentDidMount() {
    this.loadCharacters();
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
          <Text style={styles.text1}>
            Select you favorite character to see more details and become a
            master in Star Wars!
          </Text>
          <br />

          <FlatList
            data={this.state.data}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('CharacterDetail', {
                      ...item,
                    });
                  }}>
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ImageBackground>
    );
  }
}

Welcome.navigationOptions = {
  headerShown: false,
};
