import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Item from './Item';
import ItemSeccion from './ItemSeccion';
import Button from './Button';

// Información de la mascota en cada sección.
const DetalleMascota = (props) => {
    return (
        <Item>
            <ItemSeccion>
                <View style={styles.estiloContenedor}>
                    <Text style={styles.estiloTexto}>Raza: {props.mascotas.raza}</Text>
                    <Text style={styles.estiloTexto}>Nombre: {props.mascotas.nombre}</Text>
                </View>
            </ItemSeccion>
            <ItemSeccion>
                <Image style={styles.estiloImagen}
                    source={{
                        uri: props.mascotas.imagen,
                    }}
                />
            </ItemSeccion>
            <ItemSeccion>
                <Button botonPresionado={() => { Linking.openURL(props.mascotas.informacion); }} />
            </ItemSeccion>
        </Item>
    );

};

// Estilos de la mascota.
const styles = {
    estiloContenedor: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    estiloImagen: {
        height: 150,
        width: 150
    },
    estiloTexto: {
        fontSize: 18,
        fontWeight: '200',
        textTransform: 'uppercase'
    }

}

export default DetalleMascota;