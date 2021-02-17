import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

// Se crean diferentes views para dar un mejor orden.
const Tarjeta = (props) => {
  return (
    <View style={[s.bgLight, s.m2, s.tittextPrimaryle]}>
      <View style={[s.card, s.shadow]}>
        <View style={[s.body]}>
          <View style={[s.containerFluid]}>
            <View style={[s.row]}>
              <View style={[s.col4, s.p1]}>
                <Image
                  source={{ uri: props.imagen }}
                  // Establecer valor predeterminado para las imágenes y no dañen el diseño de la aplicación.
                  style={{ width: 150, height: 150 }}
                />
              </View>
              <View style={[s.col6]}>
                <View style={[s.border, s.mb2, s.mt2]}>
                  <Text>Nombre: {props.nombre}</Text>
                </View>
                <View style={[s.border, s.mb2, s.mt2]}>
                  <Text>Raza: {props.raza}</Text>
                </View>
                <View style={[s.border]}>
                  <Text style={{ color: 'green' }}
                    onPress={() => Linking.openURL(props.informacion)}>
                    Información, pulsa aquí
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Tarjeta;

