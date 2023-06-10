import React, { useState } from 'react'
import MenuButton from '../../molecule/menuButtons'
import { buttonData } from '../../constants/menuButtonConstants'
import Logo from "../../../../assets/logo/whiteR.png"
function Menu({setButton}) {
    const [activeKey, setActiveKey] = useState(1)
    const handleButtonClick = (id) => {
        setActiveKey(id)
        setButton(id)
    }
    return (
        <div className="w-1/5 bg-white p-4 border-r-4 border-lightGray align-center">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-10 bg-brand rounded-full p-1">
                    <img src={Logo} alt="Logo" className="h-8 w-8" />
                </div>
            </div>
            {
                buttonData.map((x) => (
                    <MenuButton label={x.name} activeKey={x.id} onPress={handleButtonClick} active={activeKey} />
                ))
            }
        </div>
    )
}

export default Menu