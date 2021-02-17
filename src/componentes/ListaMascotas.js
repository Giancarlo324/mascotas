import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import DetalleMascota from './DetalleMascota';

class ListaMascotas extends Component {
    state = { listaMascotas: [] };

    componentDidMount() {
        // Obtener el json de la api, aquí se escribe la URL de la api, se debe escribir
        // la ip del computador donde se está ejecutando el servicio, no localhost porque
        // tomaría la ip del celular y se necesita la del computador.
        axios.get("http://192.168.20.103:8080/WSRESTMASCOTAS/webresources/udenar.mascotas")
            .then(response => {
                // llenar el valor en listaMascotas
                this.setState({ listaMascotas: response.data });
            })
            .catch(error => {
                // Consola para errores.
                console.log(error);
            });

    }
    listaAMostrar = () => {
        return this.state.listaMascotas.map(mascotas => {
            // Exportar la lista.
            return <DetalleMascota key={mascotas.id} mascotas={mascotas}></DetalleMascota>

        })

    };
    render() {
        // Esto se retornará en ListaMascotas.
        return <ScrollView>{this.listaAMostrar()}</ScrollView>;
    }
}

export default ListaMascotas;
