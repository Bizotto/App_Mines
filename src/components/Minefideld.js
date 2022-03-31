import React from 'react';
import {View, StyleSheet} from 'React-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    /*Array de jsx*/
    const columns = props.board.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return  <View key={r}>{columns}</View>
  });
  return <View style={styles.container}>{rows}</View>
};


const styles = StyleSheet.create({

  container:{

  }
})