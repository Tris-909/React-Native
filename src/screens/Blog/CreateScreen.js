import React, {useState, useContext} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Context} from './context/context';

const CreateScreen = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const context = useContext(Context);

    const onSaveButtonHandler = (title, content) => {
        context.addBlogPosts(title, content);
        setTitle('');
        setContent('');
        props.navigation.navigate('Blog');
    }

    return(
        <View style={style.container}>
            <View style={style.InputMargin}>
                <Text style={style.InputTitle}>Enter Title :</Text>
                <TextInput 
                    value={title}
                    inputStyle={{ marginLeft: 20, fontSize: 20 }}
                    onChangeText={setTitle}
                    autoCorrect={false}
                    style={style.Input} 
                />
            </View>
            <View style={style.InputMargin}>
                <Text style={style.InputTitle}>Enter Content :</Text>
                <TextInput 
                    style={style.Input} 
                    onChangeText={setContent}
                    value={content}
                    autoCorrect={false}
                />
            </View>
            <TouchableOpacity style={style.SaveButton} onPress={() => onSaveButtonHandler(title, content)}>
                    <Text style={style.SaveButtonText}>Save</Text>
            </TouchableOpacity>
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

export default CreateScreen;
