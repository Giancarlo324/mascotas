import React from 'react';
import { View, Text, Image } from 'react-native';

/**
 * Título para cabecera
 * @param {String} props 
 */
const Header = (props) => {

    const { estiloTexto, estiloContenedor } = styles;

    return (
        <View style={estiloContenedor}>
            <Text style={estiloTexto}>{props.titulo}</Text>
        </View>
    );
};

/**
 * Se establecen colores para la cabecera
 * y otros estilos como tamaño y demás.
 */
const styles = {
    estiloTexto: {
        fontSize: 20,
        color: "#1e1e1e"
    },
    estiloContenedor: {
        borderRadius: 0,
        borderWidth: 0,
        backgroundColor: '#EF671E',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15
    }
};

export default Header;