/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Cabecera from './src/components/Cabecera'
import Tarjeta from './src/components/Tarjeta'

const App: () => React$Node = () => {

  const [mascotas, llenarMascotas] = React.useState([]);

  const obtenerMascotas = async () => {
    try {
      // Se debe establecer la dirección ip de la máquina, al ejecutar solo con localhost generá error porque toma la ip del celular y no del equipo.
      let response = await fetch('http://192.168.20.103:8080/WSRESTMASCOTAS/webresources/udenar.mascotas', {
        // Se establece el tipo que se va a leer.
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      // Variable que será leída más adelante, esto en formato json.
      let datosJson = await response.json();
      // Se llena diréctamente el vector con mascotas.
      llenarMascotas(datosJson);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    obtenerMascotas();
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <Cabecera />
          {// se mapea cada valor de las mascotas y poder mostrar como una tarjeta.
            mascotas.map((mascota, llave) =>
              <Tarjeta
                key={llave}
                raza={mascota.raza}
                imagen={mascota.imagen}
                nombre={mascota.nombre}
                informacion={mascota.informacion}
              />
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#4db6e2",
  },
});

export default App;
