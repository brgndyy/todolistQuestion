import React from "react";
import classes from "./Header.module.css";
import { MdLightMode } from "react-icons/md";
import { HiMoon } from "react-icons/hi";
import { useContext } from "react";
import DarkModeContext from "../store/darkMode-context";
import ListModeContext from "../store/listmode-context";

function Header() {
  const darkContext = useContext(DarkModeContext);
  const listContext = useContext(ListModeContext);

  const setDarkHandler = () => {
    darkContext.darkHandler();
  };

  console.log(listContext.listMode);



  return (
    <div
      className={
        darkContext.dark ? `${classes.header} ${classes.dark}` : classes.header
      }
    >
      {darkContext.dark ? (
        <MdLightMode className={classes.darkModeBtn} onClick={setDarkHandler} />
      ) : (
        <HiMoon className={classes.darkModeBtn} onClick={setDarkHandler} />
      )}

      <div className={classes.todo_Section}>
      {listContext.modeList.map((item, key) => {return (
        <button value={listContext.listMode} onClick={() => {listContext.listModeHandler(item)}} key={key}>{item}</button>
      )})}
      </div>
    </div>
  );
}

export default Header;
