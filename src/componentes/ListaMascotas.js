import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import DetalleMascota from './DetalleMascota';

class ListaMascotas extends Component {
    state = { mascotas: [] };

    componentDidMount() {
        /**
         * Dirección URL del servicio, en este caso se ejecuta de manera local, por lo tanto
         * se escribe la ip del equipo donde se está ejecutando el servicio REST.
         */
        axios.get("http://192.168.20.103:8080/WSRESTMASCOTAS/webresources/udenar.mascotas")
            .then(response => {
                this.setState({ mascotas: response.data });
            })
            .catch(error => {
                console.log("Error: " + error);
            });

    }
    /**
     * Listado de mascotas encontradas
     */
    listaAMostrar = () => {
        return this.state.mascotas.map(mascotas => {
            return <DetalleMascota key={mascotas.id} mascotas={mascotas}></DetalleMascota>
        })
    };

    render() {
        return <ScrollView>{this.listaAMostrar()}</ScrollView>;
    }
}

export default ListaMascotas;