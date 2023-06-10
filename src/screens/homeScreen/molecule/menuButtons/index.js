import React from 'react'
import { CashOutline, PieChartOutline, RestaurantOutline, SettingsOutline } from 'react-ionicons'

function MenuButton({ label, active, onPress, activeKey }) {
    return (
        <button className={`flex items-center font-sans-condensed bg-navy w-full shadow rounded-lg p-2 px-8 mt-8 ${active === activeKey ? 'bg-blue-500 text-white' : 'text-black'}`} onClick={() => onPress(activeKey)}>
            {
                activeKey == 1 ?
                    <RestaurantOutline
                        color={'#00000'}
                        rotate={active === activeKey ? true : false}
                        height="15px"
                        width="15px"
                    /> : activeKey == 2?
                    <CashOutline
                        color={'#00000'}
                        rotate={active === activeKey ? true : false}
                        height="15px"
                        width="15px"
                    />
                    :activeKey == 3?
                    <PieChartOutline
                        color={'#00000'}
                        rotate={active === activeKey ? true : false}
                        height="15px"
                        width="15px"
                    />:
                    <SettingsOutline
                        color={'#00000'}
                        rotate={active === activeKey ? true : false}
                        height="15px"
                        width="15px"
                    />
            }

            <span className='ml-2 '>{label}</span>
        </button>
    )
}

export default MenuButton