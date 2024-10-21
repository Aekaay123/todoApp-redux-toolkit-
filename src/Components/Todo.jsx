import { useDispatch, useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import {
  AddTodo,
  toggleComplete,
  removeTodo,
  editTodos,
} from "../slicer/todoslicer";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [editingID, setEditingId] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const inputref=useRef();

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);


  const handleOnsubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodo({ id: Date.now(), todo: todo, completed: false }));
    alert("todo added successfully");
    setTodo("");
  };

  const addNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  useEffect(()=>{
  if(inputref.current){
    inputref.current.focus();
  }
  })

  return (
    <>
      <form
        onSubmit={handleOnsubmit}
        className="space-x-3 flex justify-center items-center"
      >
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="border border-gray-400 placeholder:text-center rounded-md outline-none p-2"
          placeholder="type todo here..."
        />
        <button type="submit" className="p-2 bg-orange-600 rounded-md px-8 ">
          ADD
        </button>
      </form>
      <div>
        <table className="w-full mt-5">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Id</th>
              <th className="border border-gray-300 px-4 py-2">
                Todo Description
              </th>
              <th className="border border-gray-300 px-4 py-2">Completed</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.length == 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-2">
                  No todos available.
                </td>
              </tr>
            ) : (
              todos.map((todo) => {
                return (
                  <tr key={todo.id}>
                    <td className="border border-gray-300 px-4 py-2">
                      {todo.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          ref={editingID===todo.id?inputref:null}
                          onChange={addNewTodo}
                          className={`outline-none text-center ${editingID === todo.id ? 'border border-blue-500' : ''}`}
                          value={editingID === todo.id ? newTodo : todo.todo}
                          readOnly={editingID != todo.id}
                        />
                        {editingID == todo.id ? (
                          <FaSave className="cursor-pointer"
                            onClick={() => {
                              dispatch(editTodos({ id: todo.id, newTodo }));
                              alert("todo edited successfully");
                              setEditingId(null);
                              setNewTodo("");
                            }}
                          />
                        ) : (
                          <CiEdit className="cursor-pointer" onClick={() => setEditingId(todo.id)} />
                        )}
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        className="text-3xl"
                        onChange={() => dispatch(toggleComplete(todo.id))}
                      />
                    </td>
                    <td className="border border-gray-300 text-center px-4 py-2">
                      <div className="flex justify-center items-center h-full">
                        <AiOutlineDelete
                          onClick={() => dispatch(removeTodo(todo.id))}
                          className="cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Todo;
