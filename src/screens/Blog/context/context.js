import createDataContext from './createDataContext';
import server from '../API/axios';
import axios from '../API/axios';

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_POST': 
            const newPost = { title: action.title, content: action.content  ,id: Math.floor(Math.random()*9999) };
            return {
                ...state,
                todos: [...state.todos, newPost]
            };
        case 'GET_ALL_POSTS': 
            const newArr = action.arr;
            return {
                ...state,
                todos: newArr
            }
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
    return (title, content) => {
        dispatch({ type: 'ADD_POST', title: title, content: content })
    };
}

const getAllBlogPosts = (dispatch) => {
    return () => {
        server.get('/todos').then((result) => {
            console.log(result);
            dispatch({ type: 'GET_ALL_POSTS', arr: result.data});
        }).catch((error) => {
            console.log(error);
        });
    }
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

export const {Context, Provider} = createDataContext(reducer, { getAllBlogPosts, addBlogPosts, deleteBlog, editBlog }, { todos: [], currentToDo: null });

