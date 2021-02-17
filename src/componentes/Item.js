import React from 'react';
import {View, Text} from 'react-native';

// Exportar item, que corresponde a un contenedor grande de las tarjetas de la mascota.
const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

// Poner estilos.
const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderBottomWidth:.5,
        paddingBottom: 15
    }
};
export default Item;