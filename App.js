import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Field from './src/components/Field';
import params from './src/Params';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando o Mines!</Text>
        <Text style={styles.welcome}>
          Tamanho da Grade
          {params.getRowsAmount()}x{params.getColumnsAmount()}{' '}
        </Text>
        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={3} />
        <Field opened nearMines={2} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined exploded />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColors: '#FFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
