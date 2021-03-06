import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const Banner = () => {
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

export default Banner;
