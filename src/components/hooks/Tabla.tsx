import React from 'react'
//Tabla se considera como Tarjeta
import { IDatum } from '../interfaces/IReqRestApiContry';
const Tabla = (contry: IDatum) => {
    console.log(contry);
    return (
    <table>
        <thead>    
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Year</th>
                <th scope="col">Color</th>
            </tr>
        </thead>
                <tbody>
                    <tr>
                        <th scope="row">{contry.id}</th>
                        <td>{contry.name}</td>
                        <td>{contry.year}</td>
                        <td>{contry.pantone_value}</td>
                    </tr>
                    </tbody>
    </table>
    );
}

export default Tabla