import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slicer/counterSlice"
import todoReducer from "./slicer/todoslicer"

export default configureStore(
    {
        reducer:{
            counter:counterReducer,
            todos:todoReducer
        }
    }
)