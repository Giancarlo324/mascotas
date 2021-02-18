import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
 * 
 * @param {información mascota} props 
 */
const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.botonPresionado} style={styles.estiloBoton}>
            <Text style={styles.estiloTexto}>Acerca de la raza</Text>
        </TouchableOpacity>
    );
};
/**
 * Estilos para boton y texto dentro del boton
 */
const styles = {
    estiloTexto: {
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 3,
        color: '#000'
    },
    estiloBoton: {
        alignSelf: 'stretch',
        backgroundColor: '#09C9D4',
        alignItems: 'center',
        borderWidth: .5,
        paddingTop: 2,
        marginTop: 10,
        marginLeft: 7,
        marginRight: 7,
        marginBotton: 15
    }
}

export default Button;