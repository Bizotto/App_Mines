import React from 'react';

import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View styles={styles.pole} />
      <View style={styles.flag} />
      <View style={styles.base} />
      <View style={styles.base2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  pole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginleft: 9,
  },
  flag: {
    position: 'absolute',
    height: 4,
    width: 6,
    backgroundColor: '#f22',
  },
  base: {
    position: 'absolute',
    height: 2,
    width: 6,
    marginLeft: 7,
    marginTop: 10,
    backgroundColor: 'green',
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 7,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 12,
  },
});
