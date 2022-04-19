import React, {useMemo, useState, useReducer, useCallback, useEffect} from 'react';

import Start from './components/Start';
import User from './components/User';
import UserAge from './components/UserAge';
import AddInfoButton from './components/AddInfoButton';
import Context from './components/Context';

import './App.css';

const createUser = (name, surname, age) => {
  return {name, surname, age}
}

const reducer = (age, action) => {
  switch(action.type) {
      case 'minus_ten': 
          return age - 10;
      case 'minus_one':
          return age - 1;
      case 'plus_one':
          return age + 1;
      case 'plus_ten':
          return age + 10;
      default: 
          return age;    
  }
}    

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const setUserName = (name) => {setName(name)};
  const setUserSurname = (surname) => {setSurname(surname)}; 
      
  const [age, dispatch] = useReducer(reducer, 20);
  
  const changeAge =(years) => {
      dispatch(years);
  };

  const user = useMemo(() => createUser(name, surname, age), [name, surname, age]); 

  const userInfo = {
    user,
    setUserName,
    setUserSurname,
    changeAge
  }

  const [bgColor, setBgColor] = useState({backgroundColor: `#e`+`20`});

  const bg = useCallback((age) => {setBgColor({backgroundColor: `#e`+`${age}`})}, [age])

  useEffect(() => {
        bg(age) 
    }, [bg, age]);

  return (
    <Context.Provider value={userInfo}>
      <div className="App">
        <Start />
        <User />
        <UserAge />
        <AddInfoButton bgColor={bgColor}/>
      </div>
    </Context.Provider>
  );
}

export default App;