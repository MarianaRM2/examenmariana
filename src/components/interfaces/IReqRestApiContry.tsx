/*
Agregamos el link de API a postman para recibir las respuesta y copiamos la respuesta obtenida
ingresamos a la pagina https://app.quicktype.io/ para una distribucion de la API
Cambiamos los siguientes aspectos (codigo).
    Welcome -> IReqRestApiContry
    Datum -> IDatum
    Support -> ISupport
*/
export interface IReqRestApiContry {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        IDatum[];
    support:     ISupport;
}
//Duda en la recoleccion de datos de este apartado
export interface IDatum {
    id:            number;
    name:          string;
    year:          number;
    color:         string;
    pantone_value: string;
}

export interface ISupport {
    url:  string;
    text: string;
}
