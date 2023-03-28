// import { createStore } from "redux"
// import rootReducer from "./reducer";
// import { composeWithDevTools} from "redux-devtools-extension"
// // Để sử dụng công cụ redux ta cần thêm thư viện npm add redux-devtools-extension

// // bởi vì ta k có giá trị khởi tạo cho store cho nên chúng ta có thể truyền trực tiếp Enhancers làm tham só thứ 2
// const composedEnhancers = composeWithDevTools();
// const store = createStore(rootReducer,composedEnhancers)

// export default store;

// Ở trên là ta đang code bằng redux core

// Dưới này là redux toolkit
import { configureStore } from "@reduxjs/toolkit";
// import filtersReducer from "../components/Filters/filterSlice";
// import todoListReducer from "../components/TodoList/todosSlice";

import filterSlice from "../components/Filters/filterSlice";
import todosSlice from "../components/TodoList/todosSlice";
// Khác với redux core
//  store ở đây nhân vào 1 object khi sử dụng store từ toolkit ta k phải sử dụng tới combineReducers như cũ nữa
//  chúng ta cũng k cần setup midleware như composedEnhancers ở trên nữa
// const store = configureStore({
//     reducer:{
//         filters: filtersReducer ,
//         todoList: todoListReducer,
//     }
// })
// export default store

const store = configureStore({
    reducer:{
        filters: filterSlice.reducer ,
        todoList: todosSlice.reducer,
    }
})
export default store