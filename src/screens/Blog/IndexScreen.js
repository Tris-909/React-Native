import React, {useContext, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Context } from './context/context';
import { Feather, AntDesign } from '@expo/vector-icons';

const Blog = (props) => {
    const value = useContext(Context);
    
    useEffect(() => {
        value.getAllBlogPosts();
    }, [value.state]);    

    return(
        <View>
            <View style={styles.indexHeader}>
                <Text style={styles.mainTitle}>TO-DO List</Text>
                <TouchableOpacity style={styles.plus} onPress={() => props.navigation.navigate('CreateScreen')}>
                    <AntDesign name="plus" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList 
                keyExtractor={item => item.title}
                data={value.state.todos}
                renderItem={(item) => {
                    return(
                        <TouchableOpacity onPress={() => props.navigation.navigate('ShowScreen', { 
                                id: item.item.id, 
                                title: item.item.title,
                                content: item.item.content 
                            })}> 
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.item.title}</Text>
                                <TouchableOpacity onPress={() => value.deleteBlog(item.item.id)}>
                                    <Feather name="trash" size={30} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>

                    );
                }}
            />
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
    },
    indexHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    plus: {
        alignSelf: 'center',
        marginRight: 15
    }
});

export default Blog;

//! This Application using JSON Server
//! Next to this file, we have a file called "jsonserver"
//! Go to that file and open the terminal : "npm run db" and "npm run tunnel" to prepare our local server
//! After this, the App should be working as normal