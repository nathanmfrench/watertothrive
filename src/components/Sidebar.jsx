import React from 'react';
import {MdDashboard} from "react-icons/md";
import {GiWell} from "react-icons/gi"
import {FiMap} from "react-icons/fi";
import {BiUserCircle} from "react-icons/bi";
import {MdLogout} from "react-icons/md";
import Links from './Links';
import w2tlogo from './w2tlogo.png';

console.log(w2tlogo);

export default function Sidebar() {
    var links1 = [
        {
            text:"Dashboard",
            icon:MdDashboard,
            active:true,
        },
        {
            text:"Map",
            icon:FiMap,
            active:false
        },
        {
            text:"Projects",
            icon:GiWell,
            active:false
        }
    ];
    var links2 = [
        {
            text:"Logout",
            icon:MdLogout,
            
        },
    ];
    return( <div className= "sidebar">
        <div className='logowrapper'><img className='logo' src={w2tlogo} alt="logo" /></div>
        <div className="links">
            <Links links={links1} />
            <Links links={links2} />
        </div>
        
    </div>);

}
