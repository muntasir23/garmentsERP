import React from 'react'
import Topbar from './topbar'
import { useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router-dom'
import Supplier from '../pages/supplier'

const Mainbar = () => {
    const toggleTheme = useSelector((state) => state.app.toggleTheme)
    return (
        <>
            <div className=' w-full'>
                <Topbar />
                
                <div className={`p-2 h-full bg-secondary-${toggleTheme?'dark':'light'}`}>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}

export default Mainbar