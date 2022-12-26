import React from 'react'
import ListModeContext from './listmode-context'
import { useState } from 'react';

const modeList = ['All', 'Active', 'Completed'];

function ListModeProvider(props) {

    const [listMode, setListMode] = useState(modeList[0]);

  
    // 버튼 클릭하면 listMode 변경해주는 핸들러
      const listModeHandler = (item) => {
        setListMode(item);
        console.log(item);
        
      }

      const listmodeContext = {
        modeList : modeList,
        listMode : listMode,
        setListMode : setListMode,
        listModeHandler : listModeHandler
      }

  return (
    <ListModeContext.Provider value={listmodeContext}>
    {props.children}
    </ListModeContext.Provider>
  )
}

export default ListModeProvider