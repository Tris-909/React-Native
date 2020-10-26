import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context } from './context/context';
import { Feather } from '@expo/vector-icons';

const Blog = (props) => {
    const value = useContext(Context);

    return(
        <View>
            <Text style={styles.mainTitle}>Blog</Text>
            <FlatList 
                keyExtractor={item => item.title}
                data={value.state}
                renderItem={(item) => {
                    return(
                        <TouchableOpacity onPress={() => props.navigation.navigate('ShowScreen', { 
                                id: item.item.id, 
                                title: item.item.title,
                                content: item.item.content 
                            })}> 
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.item.title} with ID: {item.item.id}</Text>
                                <TouchableOpacity onPress={() => value.deleteBlog(item.item.id)}>
                                    <Feather name="trash" size={30} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
            <Button title="add Post" onPress={value.addBlogPosts} />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    mainTitle: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 15
    },
    title: {
        fontSize: 20
    }
});

export default Blog;