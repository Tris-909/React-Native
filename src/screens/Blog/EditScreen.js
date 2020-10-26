import React, {useState, useEffect, useContext} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Context} from './context/context';

const EditScreen = (props) => {
    const [currentPost, setCurrentPost] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const context = useContext(Context);
    const { id, title, content } = props.navigation.state.params;

    const onSaveButtonHandler = (id, title, content) => {
        context.editBlog(id, title, content);
        props.navigation.navigate('ShowScreen', { 
            id: id, 
            title: title,
            content: content 
        });
    }

    useEffect(() => {
        setNewTitle(title);
        setNewContent(content);
    }, []);

    return(
        <View>
            <View style={style.container}>  
                <Text style={{ textAlign: 'center', fontSize: 50 }}> EDIT </Text>
                <View style={style.InputMargin}>
                    <Text style={style.InputTitle}>Enter Title :</Text>
                    <TextInput 
                        value={newTitle}
                        inputStyle={{ marginLeft: 20, fontSize: 20 }}
                        onChangeText={setNewTitle}
                        autoCorrect={false}
                        style={style.Input} 
                    />
                </View>
                <View style={style.InputMargin}>
                    <Text style={style.InputTitle}>Enter Content :</Text>
                    <TextInput 
                        style={style.Input} 
                        onChangeText={setNewContent}
                        value={newContent}
                        autoCorrect={false}
                    />
                </View>
                <TouchableOpacity style={style.SaveButton} onPress={() => onSaveButtonHandler(id, newTitle, newContent)}>
                        <Text style={style.SaveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 15
    },
    InputMargin: {
        marginBottom: 20
    },
    InputTitle: {
        fontSize: 25,
        marginBottom: 20
    },
    Input: {
        height: 70,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 20,
        fontSize: 25
    },
    SaveButton: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignSelf: 'center'
    },
    SaveButtonText: {
        fontSize: 25,
        fontWeight: 'bold'
    }
});

export default EditScreen;