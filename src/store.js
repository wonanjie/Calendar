
function reducer (state,action){
    switch(action){
        case 'add':
             return state + 1;
         case 'sub':
             return state - 1;
         default:
             return state;
    }
}

export default reducer