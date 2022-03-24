import React from 'react';

import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View styles={[styles.pole, props.bigger ? styles.polebigger : null]} />
      <View style={[styles.flag, props.bigger ? styles.flagbigger : null]} />
      <View style={[styles.base, props.bigger ? styles.basebigger : null]} />
      <View style={[styles.base2, props.bigger ? styles.base2bigger : null]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  pole: {
    position:'relative',
    height: 20,
    width: 9,
    backgroundColor: 'black',
    marginleft: 1,
  },
  flag: {
    marginleft: 15,
    position: 'absolute',
    height: 4,
    width: 6,
    backgroundColor: '#f00',
  },
  base: {
    position: 'absolute',
    height: 3,
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
  polebigger: {
    height: 28,
    width: 4,
    marginleft: 16,
  },
  flagbigger: {
    heith: 10,
    width: 14,
    marginleft: 3,
  },
  basebigger: {
    heith: 4,
    width: 12,
    marginTop: 20,
    marginleg: 12,
  },
  base2bigger: {
    heith: 4,
    width: 20,
    marginleft: 8,
    marginTop: 24,
  },
});
