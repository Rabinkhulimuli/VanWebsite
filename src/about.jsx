import { Link } from "react-router-dom"
export default function About(){

    return(
        <>
            <div>
                <img className="about-img" src="/images/winter-arc.jpg"/>
                <h2 className="about-h2">Don’t squeeze in a sedan when you could relax in a van.</h2>
                <p className="about-p1">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</p>
                <p className="about-p2">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

            </div>
            <div className="about-y">
                <p className="about-b">Your destination is waiting.<br></br>Your van is ready.</p>
                <Link to="/vans" className="about-c">Explore our vans</Link>
            </div>

        </>
    )
}