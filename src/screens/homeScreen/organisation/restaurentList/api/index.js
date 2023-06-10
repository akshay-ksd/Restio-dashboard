import axios from 'axios';
import { api_url } from '../../../../../staging';
export const getRestaurants = async () => {
    const data = await axios.get(`${api_url}getAllRestaurants`);
    if(data.status == 200){
        return data?.data?.data
    }
}