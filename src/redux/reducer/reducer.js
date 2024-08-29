let initialState = {
    todoList : []
}

function reducer(state=initialState,action){
    switch (action.type) {
        case "SAVE_TODO":
            return {...state, todoList: [...state.todoList, action.payload]};
        case "REMOVE_TODO":
            return {...state, todoList:[state.todoList.filter((_,index) => index !== action.payload)]};
        default:
            return {...state};
    }
        
}

export default reducer;