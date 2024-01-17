import React from "react";
import '../components/styles/BarNotice.css';

const BarNotice = ( { children } ) => {
    
    

    return (
        <section className="bar-notice">
        <div className="container">
            
            { children }

        </div>

        </section>
    )
}






export default BarNotice