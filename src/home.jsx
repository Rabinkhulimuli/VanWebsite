import { Link } from "react-router-dom"
export default function Home(){

    return(
        <>
            <div className="d-img-home">
            <h2 className="home-heading o-flow">You got the travel plans, we got the travel vans.</h2>
            <p className="home-p o-flow">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link to="/vans" className="home-btn o-flow">Find your van</Link>
            </div>
           
           
        </>
    )
}