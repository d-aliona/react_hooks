import React, {useContext, useRef} from 'react';

import Context from './Context';

const User = () => {
    const userInfo = useContext(Context);

    const changeUserName = (e) => {
        userInfo.setUserName(e.target.value)
    }

    const changeUserSurname = (e) => {
        userInfo.setUserSurname(e.target.value)
    }

    const startRef = useRef();
        
    const focus = () => {
        startRef.current.focus()
    };

    return (
        <>
            <button className='usual_button' onClick={focus}> YES </button>
            <br />
            <br />
            <input 
                className='start'
                type='text'
                placeholder='Type your name here' 
                onChange={changeUserName}
                ref={startRef}
            />
            <input 
                className='start'
                type='text' 
                placeholder='Type your surname here'
                onChange={changeUserSurname}
            />
            <br />
        </>
    )
}

export default User;