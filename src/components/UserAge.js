import React, {useContext} from 'react'

import Context from './Context';

const UserAge = () => {
    const userInfo = useContext(Context);
    
    return (
        <div>
            <span>Choose how old are you: </span>
            <button className='usual_button' onClick={() => userInfo.changeAge({type: 'minus_ten'})}>
                -10
            </button>
            <button className='usual_button' onClick={() => userInfo.changeAge({type: 'minus_one'})}>
                -1
            </button>
            <span> {userInfo.user.age} </span>
            <button className='usual_button' onClick={() => userInfo.changeAge({type: 'plus_one'})}>
                +1
            </button>
            <button className='usual_button' onClick={() => userInfo.changeAge({type: 'plus_ten'})}>
                +10
            </button>
        </div>
    )
}

export default UserAge;