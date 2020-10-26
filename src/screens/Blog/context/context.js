import createDataContext from './createDataContext';
import server from '../API/axios';
import axios from '../API/axios';

const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_ALL_POSTS': 
            const newArr = action.arr;
            return {
                ...state,
                todos: newArr
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
        server.post('/todos', { title: title, content: content, id: Math.floor(Math.random()*9999) }).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });

        dispatch({ type: 'GET_ALL_POSTS'});
    };
}

const getAllBlogPosts = (dispatch) => {
    return () => {
        server.get('/todos').then((result) => {
            dispatch({ type: 'GET_ALL_POSTS', arr: result.data});
        }).catch((error) => {
            console.log(error);
        });
    }
}

const editBlog = (dispatch) => {
    return (id, title, content) => {
        server.put(`/todos/${id}`, { title: title, content: content });
        dispatch({ type: 'GET_ALL_POSTS'});
    } 
}

const deleteBlog = (dispatch) => {
    return (id) => {
        server.delete(`/todos/${id}`);
        dispatch({ type: 'GET_ALL_POSTS'});
    }
}

export const {Context, Provider} = createDataContext(reducer, { getAllBlogPosts, addBlogPosts, deleteBlog, editBlog }, { todos: [], currentToDo: null });

