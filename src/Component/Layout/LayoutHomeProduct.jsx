import React from 'react'
import { Outlet } from 'react-router-dom'
import Carousal from '../../Component/Carousal/CoralCarousel';

function LayoutHomeProduct() {
    return (
        <div>
            <Carousal />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutHomeProduct