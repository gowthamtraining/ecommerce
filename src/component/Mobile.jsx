import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MobileData } from '../App'
import "./Mobile.css"
import "./Navbar.css"
import "./Mobile_list.css"
const Mobile = () => {
    const {filter,value,setValue} = useContext(MobileData)
    let faram = useParams()
    const {Id} = faram
    let filters = filter.filter((item,index)=>index === Number(Id))
    console.log(filters)
    let suggestion = filter.filter((item)=>item.type===filters[0].type)
    console.log(suggestion)
  return (
    <>
    <div>
      {filters.map((item)=>{
        return(
            <>
            <div className="product">
                <img src={item.url} alt="" className='Mobile_Image'/>
                <div className="product_details">
                    <div>
                    Name:    <p className='p1'>{item.name}</p>
                    </div>
                    <div className="">
                    Price:    <p className='p2'>{item.price}</p>
                    </div>
                    <div className="">
                    Rating:    <p className='p3'>{item.rating}</p>
                    </div>
                
                </div>
            </div>
            
            <div className="reviess">
                <h1>Reviews</h1>
                <div className="mobile_reviews">
                    {item.reviews.map((item)=>{
                        return(
                            <div className='reviews'>
                            <p>{item.user}</p>
                            <p>{item.comment}</p>
                            <p>{item.rating}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
        )
      })}
    </div>
    <h1 className='suggestionh1'>Suggestion:</h1>
    <div className="mobile">
       
        {suggestion.map((item)=>{
    return(
    <div className="mobile-containe">
        <div className="mobile_img">
            <img src={item.url} alt="" srcset="" />
        </div>
      <p className='mobile_name'>{item.name}</p>
        <p className='mobile_price'>{item.price}</p>
    </div>)
   })}
    </div>
</>
  )
}

export default Mobile
