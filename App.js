/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/componentes/Header';
import ListaMascotas from './src/componentes/ListaMascotas';

/**
 * Cuerpo del componente
 */
const App = () => {
  return (
    <View style={styles.estiloContenedor}>
      <Header titulo={'Mascotas'} />
      <ListaMascotas />
    </View>
  );
};

/**
 * Estilo contenedor grande, además el color de fondo.
 */
const styles = {
  estiloContenedor: {
    flex: 1,
    backgroundColor: "#E7E6E7"
  }
}
/**
 * exportar componente
 */
export default App;
