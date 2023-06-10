import axios from 'axios';
import { api_url } from '../../../../../staging';
export const addNewRestaurant = async (restaurant) => {
    const d = {restaurant}
    const data = await axios({
        method: 'post',
        url: `${api_url}addNewRestaurant`,
        data: d,
        headers: {
          'Content-Type': 'application/json'
        }
    })
    
    if(data.status == 200){
        return true
    }else{
        return false
    }
}