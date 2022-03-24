import React from 'react';
import {View, StyleSheet} from 'react-native';
import params from '../Params';
import Mines from './Mines';
import Flag from './Flag';

export default props => {
  const {mined, opened, nearMines, exploded, marked} = props;
  const styleField = [styles.field];
  if (opened) styleField.push = [styles.opened];
  if (exploded) styleField.push(styles.exploded);
  if (marked) styleField.push(styles.marked);
  if (!opened && !exploded) styleField.push(styles.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = '#2a28d7';
    if (nearMines == 2) color = '#2b520f';
    if (nearMines > 2 && nearMines < 6) color = '#f9060a';
    if (nearMines >= 6) color = '#f221a9';
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mines /> : false}
      {marked && !opened ? <Flag /> : false}
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
});
