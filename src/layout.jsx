import {Link,Outlet} from 'react-router-dom' 
 export const Layout=()=> {
    return (
        
        <>
            <nav>
                <div className="layout">
                    <Link className="layout-li" to="/">Home</Link> 
                    <Link className="layout-li" to="/about">About</Link>
                    <Link className="layout-li" to="/vans">Vans</Link> 
                </div>
                
            </nav>
            <Outlet/>
        </>
    )
}