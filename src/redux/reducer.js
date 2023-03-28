import filtersReducer from "../components/Filters/filterSlice"
import todoListReducer from "../components/TodoList/todosSlice"
import { combineReducers } from "redux"
// const rootReducer = (state = {},action) =>{
//     return{
//         filters:  filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList,action)
//     }
// }

//thay vì truyền như ở trên thì redux có combine
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer,
})
export default rootReducer