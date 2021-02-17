import React from 'react';
import {View, Text} from 'react-native';

// Corresponde al contenido donde muestra información.
const ItemSeccion = (props) =>{
    return <View style={styles.estiloContenedor}>{props.children}</View>
};

const styles={
    estiloContenedor:{
        flexDirection:"column",
        borderColor: "#686868",
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center"
    }
};
export default ItemSeccion;