import createDataContext from './createDataContext';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_POST': 
            const newPost = { title: `New Blog ${ state.length + 1}`, content: `Random Content at the moment`  ,id: Math.floor(Math.random()*9999) };
            return [...state, newPost];
        case 'DELETE_POST':
            return state.filter((item) => item.id != action.id);
        default:
            return state;
    }
}

const addBlogPosts = (dispatch) => {
    return () => {dispatch({ type: 'ADD_POST' })};
}

const deleteBlog = (dispatch) => {
    return (id) => {
        dispatch({type: 'DELETE_POST', id: id})
    }
}

export const {Context, Provider} = createDataContext(reducer, { addBlogPosts, deleteBlog }, []);

