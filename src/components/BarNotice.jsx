import React from "react";
import '../components/styles/BarNotice.css';

const BarNotice = ( { children, descuento } ) => {
    
    console.log(descuento)
    

    return (
        <section className="bar-notice">
        <div className="container">
            
            { children }

        </div>

        </section>
    )
}






export default BarNotice