import React from 'react'
import DarkModeContext from './darkMode-context'
import { useState } from 'react';

function DarkModeProvider(props) {

  const [dark, setDark] = useState(false);

  const darkHandler = () => {
    setDark(!dark);
  }


  const darkContext = {
    dark : dark,
    darkHandler : darkHandler
  }
  return (
    <DarkModeContext.Provider value={darkContext}>
    {props.children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider