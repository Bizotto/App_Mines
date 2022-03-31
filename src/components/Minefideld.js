import React from 'react';
import {View, StyleSheet} from 'React-native';
import Field from './Field';

export default props => {
  const rows = props.board.map((row, r) => {
    const columns = props.board.map((field, c));
    return <Field {...field} key={c} />;
  });
};
