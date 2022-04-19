import React from 'react'

import '../index.css';

const Start = () => {
        
    const end = () => {
        let el = document.querySelector('#root');
            if (el.hasChildNodes()) {
                el.childNodes.forEach(child => el.removeChild(child));
            }
    }
   
    return (
        <>
           <h3>Would you like to fill in the fields below?</h3> 
           <button className='usual_button' onClick={end}> NO </button>
        </>
    )
}

export default Start;