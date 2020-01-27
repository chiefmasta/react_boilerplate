import React,{useContext}  from "react"
import {TodoContext} from "../context"


export default ()=>{
    const  [list] = useContext(TodoContext)
    
    return(<>
    {list && list.map((item, index)=><div key={index}>
        {item}
    </div>)}
    </>)
}