import React from 'react'
import './nav.css'
import nav_data from './navigator_data.js'
import img from  "../../assets/images/avatar.jpeg"

function Navigation({active,setActive}) {


  return (
    <>
      <div className="nav">
        <div className='inner-nav'>
          <div className='upper_nav'>
            <img  src={img} alt="" />
            <div className='name'>
              <h3>Nahom</h3>
              <h5>Your Money</h5>
            </div>
          </div>
          <ul className='nav_elems'>
            {nav_data.map((nav)=>{
              if(nav.id!=5){
              return(

                <li onClick={
                    ()=>setActive(nav.id)} 
                    className={active===nav.id?'active':''}
                    key={nav.id}

                >
                    <div className={active===nav.id?'bar':''}></div>
                    <span className='span'>{nav.icon}</span>
                    <span>{nav.name}</span>
                </li>)}
            })}
          </ul> 
        </div>
        
        <li className='signout' key={nav_data[4].id}>
            {nav_data[4].icon}
            <span>{nav_data[4].name}</span>
        </li>
      </div>
    
    </>
  )
}

export default Navigation
