
// const initState = {
//     search: '',
//     status: 'All',
//     priorities: []
// }

// const filtersReducer = (state = initState, action) => {

//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//             case 'filters/prioritiesFilterChange':
//                 return {
//                     ...state,
//                     priorities: action.payload
//                 }
//         default:
//             return state;
//     }
// }
// export default filtersReducer

// ---------------Ở trên là code theo kiểu redux core-------------------------


// ---------------Dưới Đây là code Reducer theo react-toolkit-----------------------
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export default createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        searchFilterChange: (state,action) => {
            // mutation nhưng thực tế là immutation do toolkit có IMMER
            state.search = action.payload ;
        }, // => {type: 'filters/searchFilterChange}
        // Mỗi thằng reducers này sẽ tự động tạo ra 1 action creators 
        // vd: function statusFilterChange(){
        //     return {
        //         type: 'filters/statusFilterChange'
        // }
        statusFilterChange: (state,action) => {
            state.status = action.payload;   
        },
        prioritiesFilterChange: (state,action) => {
            state.priorities = action.payload;
        }
    }
})