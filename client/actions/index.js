let nextToDoId = 0;

const ADD_TO_DO = "ADD_TO_DO";
const SET_VISIBILITY_FACTOR = "SET_VISIBILITY_FACTOR";
const TOOGLE_TODO = "TOOGLE_TODO";


export const addToDo = text => {
    return {
        type: ADD_TO_DO,
        text,
        id: nextToDoId++
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: SET_VISIBILITY_FACTOR,
        filter
    }
}


export const toogleToDo = id => {
    return {
        type : TOOGLE_TODO,
        id
    }
}