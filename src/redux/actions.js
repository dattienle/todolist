// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload:  {id : 5, name:'Learn Football', completed: false, priority: 'Medium'}
// Này là làm cho TodoList
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId,
    }
}
//  action creators => function

// Này là làm cho Filter

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

// vì cái dữ liệu truyền vô là 1 array multi select nên vì thế payload sẽ là priority
export const prioritiesFilterChange = (priorities) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priorities,
    }
}