import React,{useMemo} from 'react'
import {Link } from 'react-router-dom'
import './server'
export default function Vans(){
    const [data,setData]=React.useState([])
    const [oldd,setOldd]=React.useState(data)
    const [search,setSearch]=React.useState("")
    const [clk,setClk]=React.useState("type")
    const [toggle,setToggle]=React.useState(false)
    React.useEffect(()=> {
        fetch("/api/vans")
            .then((res)=> res.json())
            .then((dat)=> {setData(dat.vans); return setOldd(dat.vans)})
            
    },[])
    function HandleChange(event){
        const text=event.target.value
        setData((old)=> text.length==0 ? oldd : old.filter((eold)=> clk=="type"?eold.type.toLowerCase().includes(text.toLowerCase()):eold.name.toLowerCase().includes(text.toLowerCase())))
        setSearch(text)

    }
    const Vans= useMemo(()=> data.map((van)=> {
        return (
            <div key={van.id} className="van">
                <Link to={`/Detail/${van.id}` }>
                <img className="van-img" src={van.imageUrl}/>
                <p className="van-p">Name: {van.name}</p>
                <p className="van-p">Type: {van.type} </p>
                <p className="van-p">Price:<span>$</span>{van.price}<sub>/Day</sub> </p>
                </Link>
            </div>
        )
    }),[data])
    const styles={display:toggle?"block":"none"}
    return(
        <>
           {data ? (<div>
                <h2>Explore our van options</h2>
                <input type="text" name="search" value={search} onChange={HandleChange} />
                <div className="below-me">
                
                <button className="btn" onClick={()=> setToggle((prev)=> !prev)}>Search By</button>
                <div className="type-h" style={styles}>
                    <p  className="type-h1" onClick={()=> { setToggle((prev)=> !prev);  return setClk("name")}}>Name</p>
                    <p  className="type-h1" onClick={()=> { setToggle((prev)=> !prev); return setClk("type")}}>Type</p>
                </div>
                </div>
                <p>{search} </p>
               <div className="van-d">
                {Vans}
               </div>
            </div>):<h2>Loading.... </h2>}
        </>
    )
}