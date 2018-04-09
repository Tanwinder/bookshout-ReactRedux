export function data(state=[],action) {
    switch(action.type) {
        case 'data':
        return action.payload.data;
        default:
        return state;
    }
}

export function details(state= null, action){
    switch(action.type) {
        case 'details':
        return action.payload.details;
        default:
        return state;
    }
}