import React from 'react';
import {ImageBackground, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <ImageBackground
      style={styles.header}
      source={require('../resources/images/idlewild_open2021.png')}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    height: 150,
  },
});

export default Header;
