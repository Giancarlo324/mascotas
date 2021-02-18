import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';

/**
 * 
 * @param {Datos del json que llega en la url} props 
 */
const DetalleMascota = (props) => {
    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>{props.mascotas.raza}</Text>
                    <Text>Nombre: </Text>
                    <Text style={styles.estiloTexto}>{props.mascotas.nombre}</Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Image style={styles.estiloImagen} source={{ uri: props.mascotas.imagen }} />
            </ItemSeccion>
            <ItemSeccion>
                {/** Redirección al navegador para ver información de la raza de la mascota */}
                <Button botonPresionado={() => { Linking.openURL(props.mascotas.informacion); }} />
            </ItemSeccion>
        </Item>
    );

};

/**
 * Estilos para la información de la mascota, también se establece
 * el tamaño de la imagen estáticamente
 */
const styles = {
    estiloContenedor: {
        flexDirection: "column",
        justifyContent: "space-between"
    },
    estiloImagen: {
        height: 200,
        width: 200
    },
    estiloTexto: {
        fontSize: 18,
        fontWeight: '200',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }

}

export default DetalleMascota;