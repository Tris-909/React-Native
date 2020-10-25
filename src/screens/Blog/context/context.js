import React, {createContext, useState} from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPosts = () => {
        setBlogPosts([...blogPosts, { title: `New Blog ${blogPosts.length + 1}` }]);
    }

    return(
        <BlogContext.Provider value={{
            data: blogPosts,
            addBlogPosts
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;
