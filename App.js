/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//IMPORTAR COMPONENTES, LIBRERIAS REQUERIDAS

import React from 'react';
import { View } from 'react-native';
import Header from './src/componentes/Header';
import ListaMascotas from './src/componentes/ListaMascotas';
//CUERPO DEL COMPONENTE

const App = () => {
  return (
        <View style={styles.estiloContenedor}>
          <Header titulo={'Proyecto Mascotas'}/>
          <ListaMascotas/>
        </View>
  );
};

const styles={
  estiloContenedor:{
    flex:1,
    backgroundColor: "#eaeaea"
  }
}
//EXPORTAR EL COMPONENTE
export default App;
