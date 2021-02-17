import React from 'react';
import { View, Text, Image } from 'react-native';

// Navbar con logo y un tamaño fijo en los estilos.
const Header = (props) => {

    const { estiloTexto, estiloContenedor } = styles;

    return (
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
            <Image
                source={require('../logo.png')}
                // Se carga un logo para el cabecera y se le dará un tamaño predeterminado.
                style={{ width: 50, height: 50 }}
            />
        </View>
    );
};

// Estilos en el header.
const styles = {
    estiloTexto: {
        fontSize: 20,
        color: "#1e1e1e"
    },
    estiloContenedor: {
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: '#30A5F1',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 25
    }
};

export default Header;