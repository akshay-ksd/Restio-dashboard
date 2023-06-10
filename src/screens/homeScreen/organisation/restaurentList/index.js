import React, { useLayoutEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { Create, Flash, Eye } from 'react-ionicons';
import { getRestaurants } from './api';


const RestaurantList = (props, ref) => {
    //state
    const [restaurants, setRestaurants] = useState(false)

    useImperativeHandle(ref, () => ({
        reloadList: () => {
            setRestaurants(false)
            setTimeout(() => {
                getData()
            }, 500);
        }
    }))
    useLayoutEffect(() => {
        getData()
    }, [])

    //functions
    const getData = async () => {
        const data = await getRestaurants();
        if (data.length !== 0) {
            setRestaurants(data);
        } else {
            setRestaurants("empty");
        }
    }
    return (
        <>
            {
                !restaurants ?
                    <div className="flex items-center justify-center h-screen w-100">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    </div> :
                    restaurants !== "empty" ?
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 overflow-y-auto max-h-[690px] mt-5 py-5 ">
                            {restaurants && restaurants.map((restaurant) => (
                                <div key={restaurant.id} className="bg-white p-4 rounded shadow">
                                    <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-40 object-cover mb-2 rounded" />
                                    {restaurant.is_active ? (
                                        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mt-1"></span>
                                    ) : (
                                        <span className="inline-block w-3 h-3 rounded-full bg-red-500 mt-1"></span>
                                    )}
                                    <p className="font-sans-condensed text-sm mt-2">{restaurant.name}</p>
                                    <div className="flex justify-between mt-4">
                                        <button>
                                            <Flash
                                                color={'green'}
                                                height="20px"
                                                width="20px"
                                                onClick={()=>props.rechargePopUp(restaurant)}
                                            />
                                        </button>
                                        <button>
                                            <Eye
                                                color={'#3B82F6'}
                                                height="20px"
                                                width="20px"
                                            />
                                        </button>
                                        <button>
                                            <Create
                                                color={'#e53854'}
                                                height="20px"
                                                width="20px"
                                            />
                                        </button>
                                    </div>

                                </div>
                            ))}

                        </div>
                        : <div className="flex items-center justify-center h-screen w-100">
                            <p className='font-sans-condensed text-sm font-bold'>No Restaurant Found</p>
                        </div>
            }
        </>

    );
};

export default forwardRef(RestaurantList);
