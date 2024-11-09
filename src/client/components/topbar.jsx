import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToggleSidebar } from './sidebar/sidebarSlice'
import { setToggleTheme } from '../AppSlice'
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
const Topbar = () => {

    const dispatch = useDispatch()
    const toggleTheme = useSelector((state) => state.app.toggleTheme)
    const handleToggleTheme = () => {
        dispatch(setToggleTheme())
    }

    const handleToggleSidebar = () =>{
        dispatch(setToggleSidebar())
    }

    return (
        <div className={`border-b-1 flex justify-between px-5 py-3 bg-info-${toggleTheme?'dark':'light'}`}>
            <button onClick={handleToggleSidebar} className="btn btn-square">
                {
                     <CgOptions size={25} />
                }
            </button>
            <button onClick={handleToggleTheme} className="btn btn-square">
                {
                    toggleTheme ? <MdDarkMode size={25}/> : <MdOutlineDarkMode size={25} />
                }
            </button>
        </div>
    )
}

export default Topbar