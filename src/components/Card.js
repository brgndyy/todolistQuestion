import React from 'react'
import classes from './Card.module.css'
import { useContext } from 'react'
import DarkModeContext from '../store/darkMode-context'

function Card(props) {

    const darkContext = useContext(DarkModeContext);


  return (
    <div className={
        darkContext.dark ? `${classes.cardContainer} ${classes.dark}` : classes.cardContainer
      }>
    {props.children}
    </div>
  )
}

export default Card