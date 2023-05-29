import React, {useContext, useEffect} from 'react'
import axios from 'axios'
import testContext from './textContext'

export default function Todos() {
    const {todos, setTodos} = useContext(testContext);
    console.log(typeof setTodos)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todos')
        .then(res=>{
            console.log(res.data.data)
            setTodos(res.data.data)
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    console.log("todo",todos.find(el=>el.id==1))
    let todo = todos.find(el=>el.id==1)

  return (
    <div>
        {JSON.stringify(todos)}
    </div>
  )
}
