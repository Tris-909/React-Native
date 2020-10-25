import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from './context/context';

const Blog = () => {
    const value = useContext(BlogContext);

    return(
        <View>
            <Text>Blog</Text>
            <FlatList 
                keyExtractor={item => item.title}
                data={value.data}
                renderItem={(item) => {
                    return(<Text>{item.item.title}</Text>);
                }}
            />
            <Button title="add Post" onPress={value.addBlogPosts} />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default Blog;