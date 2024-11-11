import React from 'react'
// import Sidebar from '../components/sidebar/sidebar'
import Mainbar from '../components/mainbar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const toggleTheme = useSelector((state)=>state.app.toggleTheme)
    return (
        <>
            <div className={`flex h-dvh w-full`}>
                <Sidebar />
                <Mainbar>
                    <Outlet />
                </Mainbar>
            </div>
        </>
    )
}

export default Dashboard