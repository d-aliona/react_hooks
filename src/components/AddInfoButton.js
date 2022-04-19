import React, {useContext, useState} from 'react';

import Context from './Context';

const AddInfoButton = (props) => {
    const userInfo = useContext(Context);
    const [addInfo, setAddInfo] = useState('');
    
    const handlerClick = () => {
        setAddInfo( `Hi, ${userInfo.user.name} ${userInfo.user.surname}! In ${100 - userInfo.user.age} years you'll celebrate your centenary! `);
    }

    return (
        <div>
            <button className='add_info_button' style={props.bgColor} onClick={handlerClick}>
                Click here to find out valuable information about yourself
            </button>
            <h2>{addInfo}</h2>
        </div>
    )
}

export default AddInfoButton;