import React from 'react'
//Paises se considera como personaje
import { useContry } from './useContry';
import Tabla from './Tabla';
const Paises = () => {
    //importamos el custom hook de usContry
    const {contrys} = useContry();
    return (
        <>
            <div className=''>
            {
                contrys.map(contry => <div className='' key={contry.id}>
                    <Tabla key={contry.id} {...contry} /> </div>
                    )
            }
            </div>
        </>
    )
}
export default Paises