import {useParams} from 'react-router-dom'
import React from 'react'
import './server'
export default function Detail(){
    const [sdata,setSdata]=React.useState([])
    const param=useParams()
    React.useEffect(()=> {
        fetch(`/api/vans/${param.id}`)
            .then(res => res.json())
            .then(data => setSdata(data.vans))
    },[param])
    
    return (
        <>
           { sdata ? (<div>
            <img className="van-img-i" src={sdata.imageUrl}/>
           <div className="van-back">
           <div className="pay">
                <p className="van-p">Name: {sdata.name}</p>
                <p className="van-p">Type: {sdata.type} </p>
                <p className="van-p">Price:<span>$</span>{sdata.price}<sub>/Day</sub> </p>
               
            </div>
                 <button className="pay-btn">Book Now</button>
           </div>
                <p>{sdata.description}</p>
            </div>): <h2>Loading.....</h2>}
        </>
    )
}