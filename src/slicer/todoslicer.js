import {createSlice} from "@reduxjs/toolkit"

export const todoSlicer=createSlice({
    name:"Todos",
    initialState:{
        todos:[{
            id:Date.now(),
            todo:"learn redux",
            completed:false
        }]
    },
    reducers:{
        AddTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        toggleComplete:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload?{...todo,completed:!todo.completed}:todo);
        },
        editTodos:(state,action)=>{
            const {id,newTodo}=action.payload;
            state.todos=state.todos.map((todo)=>todo.id===id?{...todo,todo:newTodo}:todo);
        }

    }
})

export const {AddTodo,removeTodo,toggleComplete,editTodos}=todoSlicer.actions

export default todoSlicer.reducer;