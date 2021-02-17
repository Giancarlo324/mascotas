import React from 'react';
import { View, Text, Image } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
// Inicializa bootstrap para estilos ligeros.
const { s, c } = bootstrapStyleSheet;
const Cabecera = (props) => {
  return (
    // Vista para cabecera, se cargará una sola vez.
    <View style={[s.p1, s.alignSelfLeft, s.body, s.textPrimary]}>
      <Image
        source={require('../assets/logo.png')}
        // Se carga un logo para el cabecera y se le dará un tamaño predeterminado.
        style={{ width: 50, height: 50}}
      />
      <Text>Mascotas</Text>
    </View>
  );
};
// Exportar componente
export default Cabecera;
