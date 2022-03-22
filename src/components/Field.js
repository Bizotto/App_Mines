import react from 'react';
import {View, StyleSheet} from 'react-native';
import params from '../Params';

export default props => {
  const {mined, opened, nearMines} = props;
  const styleField = [style.field];
  if (opened) styleField.push = [styles.opened];
  if (styleField.lenght === 1) styleField.push(styles.regular);

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
});
