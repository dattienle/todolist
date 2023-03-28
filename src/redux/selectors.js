// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status
export const filterPrioritiesSelector = (state) => state.filters.priorities
// export const todoListSelector = (state) =>{
//     const searchText = searchTextSelector(state);
//     // dùng như này nếu muốn sửa thì hơi cực chỗ state.filters.search nên  thử cách trên
//     const todosRemaining = state.todoList.filter((todo) =>{
//         return todo.name.includes(state.filters.search)
//     });
//     return todosRemaining;
// }


// ta cài đặt reselect
//  khi nào dùng reselect : khi ta có selector này phụ thuộc selector khác
export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    filterStatusSelector,
    filterPrioritiesSelector,
    (todoList, searchText, status, priorities) => {
        return todoList.filter((todo) => {
            // Kiem tra status co bang all
            if (status === 'All') {
                return priorities.length
                 ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                 : todo.name.includes(searchText);
            }
            // nay la dieu kien status khac all
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed && (priorities.length ? priorities.includes(todo.priority) : true ))
            )
        })
    })