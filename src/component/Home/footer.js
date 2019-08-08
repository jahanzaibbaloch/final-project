import React from 'react';
import './sticky.css'

class StickyFooter extends React.Component {
    render(){
        return(
            <div>
                <div className='text-center d-flex justify-content-center foot'>
                <p className="footy">facebook</p>
                <p className="footy fab fa-instagram-square">Instagram</p>
                <p className="footy fab fa-google-plus-g">Google</p>
                <p className="footy fab fa-twitter-square">Twitter</p>
                </div>
            </div>
        )
    }
}

export default StickyFooter;