import React, { useState } from 'react'
import Menu from './organisation/menu';
import DashBoard from './organisation/dashboard';
function HomeScreen() {
    const [activeButton, setActiveButton] = useState(1);
    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
    };
    return (
        <div className="flex h-screen">
            <Menu setButton={handleButtonClick}/>
            {
                activeButton == 1 && (
                    <DashBoard/>
                )
            }
        </div>
    )
}

export default HomeScreen
