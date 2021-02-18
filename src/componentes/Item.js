import React from 'react';
import {View, Text} from 'react-native';

/**
 * Contenedor grande para los detalles de cada item
 * @param {Contenedor} props 
 */
const Item = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

/**
 * Estilo para contenedor
 */
const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderBottomWidth:.5,
        paddingBottom: 15
    }
};
export default Item;