import createDataContext from './createDataContext';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_POST': 
            const newPost = { title: action.title, content: action.content  ,id: Math.floor(Math.random()*9999) };
            return {
                ...state,
                todos: [...state.todos, newPost]
            };
        case 'DELETE_POST':
            return {
                ...state,
                todos: state.todos.filter((item) => item.id != action.id)
            }
        case 'EDIT_POST':
            const selectedPost = state.todos.filter(item => item.id == action.id);
            const curPost = selectedPost[0];
            curPost.title = action.title;
            curPost.content = action.content;
            const currentArr = state.todos;
            
            return {
                ...state,
                todos: currentArr
            }
        default:
            return state;
    }
}

const addBlogPosts = (dispatch) => {
    return (title, content) => {dispatch({ type: 'ADD_POST', title: title, content: content })};
}



const editBlog = (dispatch) => {
    return (id, title, content) => {
        dispatch({ type: 'EDIT_POST', id: id, title: title, content: content });
    } 
}

const deleteBlog = (dispatch) => {
    return (id) => {
        dispatch({type: 'DELETE_POST', id: id})
    }
}

export const {Context, Provider} = createDataContext(reducer, { addBlogPosts, deleteBlog, editBlog }, { todos: [], currentToDo: null });

