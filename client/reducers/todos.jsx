
const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TO_DO':
            return [
                ...state,
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                }
            ]
        case "TOOGLE_TODO":
            return state.map(todo => (todo.id == action.id)?{...todo, completed: !todo.completed}:todo);
        
        default:
            return state
        
    }
}

export default todos