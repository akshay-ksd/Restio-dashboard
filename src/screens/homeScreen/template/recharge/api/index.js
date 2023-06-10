import axios from 'axios';
import { api_url } from '../../../../../staging';
export const getPlans = async (restaurant_id) => {
    const data = await axios.get(`${api_url}getAllActivePlans`,{
        params: {
          restaurant_id: restaurant_id,
        }});
    if(data.status == 200){
        return data?.data?.data
    }
}

export const AddRecharge = async(subscription)=>{
    const d = {subscription}
    const data = await axios({
        method: 'post',
        url: `${api_url}addSubscription`,
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