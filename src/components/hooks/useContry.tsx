import {useState, useRef, useEffect} from 'react'
import { IDatum, IReqRestApiContry } from '../interfaces/IReqRestApiContry';
import ReqRestApi from '../Api/ReqRestApi';
const DEFAULT_PAGE = 1;
export const useContry = () => {
    const [contrys, setContrys] = useState<IDatum[]>([]);
    const currentPage = useRef(DEFAULT_PAGE);
        const getData = async () => {
            const response = await ReqRestApi.get<IReqRestApiContry>(
                '/contry', { params: { page: currentPage.current } }).then(
                    ({ data }) => data
                ).catch(console.log);
                    //console.log(response);
            response ? setContrys(response.data): setContrys([]);
        }
    useEffect(() => { getData(); }, []);
    return {
        contrys
    }
}