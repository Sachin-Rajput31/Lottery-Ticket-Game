import { useState} from "react";
import {v4 as uuidv4} from 'uuid';
export default function TodoList(){
   let [todos, setTodos]= useState([{task:"sample- task",id:uuidv4(),isDone:false}]); 
   let [newTodo, setNewTodo]= useState("");
   let addNewTask= ()=>{
    setTodos((prevTodos)=>{
        return ([...prevTodos, {task:newTodo, id :uuidv4(), isDone:false}]);
    });
    setNewTodo("");
   };

   let UpdateTodoValue= (event)=>{
    setNewTodo(event.target.value);
   };
   let deleteTodo=(id) =>{
  setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id !=id));
  
   };

let markAllDone= () =>{
   setTodos(prevTodos=>
    prevTodos.map((todo)=>{
        return{
            ...todo,
            isDone:true,
        
    }
   })
    );
    };

let markAsdone= (id) =>{
    setTodos(prevTodos=>
        prevTodos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                isDone:true,
            }; 
        }else{
                return todo;
            }
       })
        );
        };



    return (
        <div>
            <input placeholder="add Text" value={newTodo}  onChange={UpdateTodoValue}></input>
            <br></br>
           <button onClick={addNewTask}>Add Task</button>
           <br></br>
           <br></br>
           <br></br>

           <hr></hr>
           <h1>Task Todo!</h1>
           <ul>
            {todos.map((todo)=>(
             <li key={todo.id}>
              <span style={todo.isDone ? {textDecoration:"line-through"}:{}}>  
                
                {todo.task} 
                </span>
               &nbsp;&nbsp;&nbsp;
             <button onClick={()=>deleteTodo(todo.id)}>remove</button>
             <button onClick={()=>markAsdone(todo.id)}>mark As done!</button>
             <br/>
              </li>
            ))
            }
           </ul>
<br></br>
           <button onClick={markAllDone}>mark all done</button>
        </div>
    );
}