import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Boton que dará redirección a la información.
const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.botonPresionado} style={styles.estiloBoton}>
            {/** Texto a visualizar en el botón */}
            <Text style={styles.estiloTexto}>Visitar sitio de la mascota</Text>
        </TouchableOpacity>
    );
};

// Estilos para el botón.
const styles = {
    estiloTexto: {
        fontSize: 16,
        fontWeight: '400',
        paddingBottom: 3,
        color: '#008080'
    },
    estiloBoton: {
        alignSelf: 'stretch',
        backgroundColor: '#DFE306',
        alignItems: 'center',
        borderWidth: .5,
        paddingTop: 2,
        marginTop: 10,
        marginLeft: 7,
        marginRight: 7,
        marginBotton: 15,
        paddingBottom: 15,
        borderRadius: 15,
    }
}

export default Button;