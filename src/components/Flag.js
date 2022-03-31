import React from 'react';

import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View styles={[styles.flagpole, props.bigger ? styles.polebigger : null]} />
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
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,},
    
    // pole: {
  //   height: 20,
  //   width: 9,
  //   backgroundColor: '#000',
  //   marginLeft: 1,
  // },
  flag: {
    marginLeft: 15,
    position: 'absolute',
    height: 4,
    width: 6,
    backgroundColor: '#f00',
  },
  base: {
    position: 'absolute',
    height: 4,
    width: 6,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: 'green',
  },
  base2: {
    position: 'absolute',
    height: 4,
    width: 7,
    backgroundColor: '#222',
    marginLeft: 13,
    marginTop: 12,
  },
  polebigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagbigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  basebigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12,
  },
  base2bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24,
  },
});
