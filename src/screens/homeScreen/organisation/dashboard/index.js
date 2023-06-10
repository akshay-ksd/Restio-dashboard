import React, { useRef, useState } from 'react'
import Header from '../header'
import RestaurantList from '../restaurentList'
import RestaurantAddForm from '../../template/restaurent_adding_form'
import Recharge from '../../template/recharge'
function DashBoard() {
    const [showAddPopUp, setPop] = useState(false)
    const [rechargePop,setRecharge] = useState(false)

    //ref
    const listRef = useRef()
    //functions
    const openForm =()=> {
        setPop(true)
    };

    const closeForm =(isReload)=> {
        setPop(false)
        if(isReload){
            listRef.current?.reloadList()
        }
    }; 

    const addRestaurant =()=> {
        
    }

    const rechargePopUp =(restaurant)=> {
        setRecharge(restaurant?.restaurant_id)
    }

    const closeModel =()=> {
        setRecharge(false)
    }

    return (
        <div className="w-4/5 bg-white p-4">
            <Header openForm={openForm}/>
            <RestaurantList ref={listRef} rechargePopUp={rechargePopUp}/>
            {showAddPopUp && (<RestaurantAddForm closeForm={closeForm} addRestaurant={addRestaurant}/>)}
            {rechargePop && (<Recharge closeModel={closeModel} id={rechargePop} restaurant_id={rechargePop}/>)}
        </div>
    )
}

export default DashBoard