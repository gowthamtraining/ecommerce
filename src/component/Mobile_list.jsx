import React, { useContext, useState } from 'react'
import Data from"./Data.json"
import "./Mobile_list.css"
import {MobileData} from "../App"
import { Link } from 'react-router-dom'
const Mobile_list = () => {
    const {filter,value,setValue} = useContext(MobileData)
    let filters = filter.filter((item)=>item.search.toLowerCase().includes(value))
    console.log(filters)
  return (
    <div className="mobile">
        {filters.map((item,index)=>{
    return(
    <div className="mobile-containe">
        <div className="mobile_img">
            <img src={item.url} alt="" srcset="" />
        </div>
      <Link to={`/mobile/${index}`}> <p className='mobile_name'>{item.name}</p></Link>
        <p className='mobile_price'>{item.price}</p>
    </div>)
   })}
    </div>
   
  )
}

export default Mobile_list
