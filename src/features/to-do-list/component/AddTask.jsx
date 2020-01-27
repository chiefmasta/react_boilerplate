import React ,{ useState, useContext } from "react"
import Input from "../../../components/ui-base/Input"
import Button from "../../../components/ui-base/Button"
import {TodoContext} from "../context"

export default ()=>{

    const[value, setValue]= useState("")
    const  [list,setList] = useContext(TodoContext)
        return(
            <>
                <label htmlFor="addTodo">Task </label>
                <Input 
                onChange={(event)=>{setValue(event.target.value)}} 
                name="addTodo" 
                type="text" />
                <Button label="add" onClick={()=>setList([...list,value])} />
            </>
        )
}
