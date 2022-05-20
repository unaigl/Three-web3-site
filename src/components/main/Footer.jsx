import React from "react";
// Mine
import "../App.css";


// REACT elemts OUT of the CANVAS
export default function Footer() {

    
    const scrollTo = () => {
        window.scrollTo(0, 0)
    }



    return (

        <div className="bg-light" style={{ height: '100px' }}>
            <div className="container ">
                <div className="row">
                    <div className="col-md-12 text-center" >
                        <button onClick={scrollTo} type="button" className="btn btn-outline-dark btn-lg" style={{ display: 'inline-flex', margin: '20px' }}>⇑</button>
                        
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}
