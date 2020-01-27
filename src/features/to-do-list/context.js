import React, {createContext,useState} from "react"


export const TodoContext = createContext({})

export default ({children})=>{

    const [list,setList]=useState([])
    return(
        <TodoContext.Provider value={[list,setList]}>
            {children}
        </TodoContext.Provider>
    )  
}