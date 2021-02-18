import React from 'react';
import {View} from 'react-native';

/**
 * sección del contenido del item
 * @param {*} props 
 */
const ItemSeccion = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

/**
 * Alinear a la izquierda con un padding
 */
const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderColor: "#686868",
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "flex-start"
    }
};
export default ItemSeccion;