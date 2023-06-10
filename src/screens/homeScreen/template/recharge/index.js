import React, { useLayoutEffect, useState } from 'react'
import Model from '../../../../components/template/model'
import { CloseCircleOutline } from 'react-ionicons';
import { getPlans,AddRecharge } from './api';

const activePlanId = 2; // Assuming the active plan is the one with id 2

function Recharge(props) {
  const [activePlanId, setActivePlanId] = useState(null); // Assuming the active plan is the one with id 2
  const [plans, setPlans] = useState(false)
  const [loading, setLoading] = useState(true)
  const [upload,setUpload] = useState(false)

  useLayoutEffect(() => {
    setLoading(true)
    getData()
  }, [])

  const getData = async () => {
    const data = await getPlans(props.restaurant_id)
    const activePlanId = data.find((x)=>x.active == true)?.id
    setActivePlanId(activePlanId || null)
    setPlans(data)
    setLoading(false)
  }
  const activatePlan = async(planId) => {
    if(activePlanId == null){
      setUpload(planId)
      const subscription = {
        restaurant_id:props.restaurant_id,
        plan_id:planId,
        isActive:!activePlanId?true:activePlanId == planId?false:true
      }
      const data = await AddRecharge(subscription)
      if(data){
       setActivePlanId(planId);
       setUpload(false)
      }
    }else{
      alert("Already One Plan Is Active Please Deactivate active plan first")
    }
    
  };

  const deactivatePlan = async(planId) => {
    setUpload(planId)
    const subscription = {
      restaurant_id:props.restaurant_id,
      plan_id:planId,
      isActive:!activePlanId?true:activePlanId == planId?false:true
    }
    const data = await AddRecharge(subscription)
    if(data){
     setActivePlanId(null);
     setUpload(false)
    }
  };

  const ShimmerLoading = () => {
    return (
      <div className="animate-pulse flex justify-evenly">
        <div className="bg-gray-200 h-40 w-1/4 rounded-lg"></div>
        <div className="bg-gray-200 h-40 w-1/4 rounded-lg"></div>
        <div className="bg-gray-200 h-40 w-1/4 rounded-lg"></div>
      </div>
    );
  };
  return (
    <Model>
      <div className="p-2">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold font-sans-condensed font-sans-condensed">
            Active Plan: {plans && plans.find(plan => plan._id === activePlanId)?.name}
          </h2>
          <button onClick={() => props.closeModel()}>
            <CloseCircleOutline
              color={'#00000'}
              height="30px"
              width="30px"
            />
          </button>
        </div>
        {
          loading ?
            <ShimmerLoading />
            :
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {plans && plans.map(plan => (
                  <div key={plan._id} className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-2 font-sans-condensed">{plan.name}</h3>
                    <p className="text-gray-600 mb-4 font-sans-condensed">₹{plan.price}</p>
                    {plan._id === activePlanId ? (
                      <button className="bg-brand text-white py-2 px-4 rounded-md mr-2 font-sans-condensed" onClick={()=>deactivatePlan(plan._id)}>
                         {
                          upload == plan._id ?
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"/>
                          :
                          "Deactivate"
                        }
                      </button>
                    ) : (
                      <button className={`${activePlanId == null? "bg-green-500":"bg-gray-300"} ${activePlanId == null? "text-white":"text-gray-600"}   py-2 px-4 rounded-md mr-2 font-sans-condensed`} onClick={() => activatePlan(plan._id)}>
                        {
                          upload == plan._id ?
                          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"/>
                          :
                          "Activate"
                        }
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </>
        }

      </div>
    </Model>
  )
}

export default Recharge