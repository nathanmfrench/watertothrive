import React from 'react'
import {useNavigate} from 'react-router-dom'
import Dashboard from './Dashboard';
export default function Links({links}) {
  const navigate = useNavigate()
  return (
    <ul>
      {
        links.map((link)=> {
            return (
                <li className={link.active ? "active" : ""}>
                    <button onClick={()=>{
                      if (link.text.toLowerCase() === 'logout'){
                      //LOG OUT HERE
                      } else{
                        navigate(`/${link.text.toLowerCase()}`)
                      }

                      }}>
                        <link.icon />
                        {link.text}
                    </button>
                </li>
            );
        })}
    </ul>
  );
}
