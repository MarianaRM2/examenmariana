import axios from "axios";
//Importamos api de la url proporcionada
export const ReqRestApi = axios.create({
    baseURL: `https://reqres.in/api/users&quot`
});
export default ReqRestApi