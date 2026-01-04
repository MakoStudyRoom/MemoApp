import{View, TextInput,StyleSheet,KeyboardAvoidingView}from'react-native'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import {router} from 'expo-router'

const handlePress =():void=>{
    // メモ保存
    router.back()
}

const Edit = ():React.JSX.Element=>{
    return(
        <KeyboardAvoidingView behavior='height' style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput multiline style={styles.input} value={'買い物\nリスト'} />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='check' size={40} color='white'/>
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    inputContainer:{
        paddingVertical :32,
        paddingHorizontal :27,
        flex:1
    },
    input:{
        flex:1,
        textAlignVertical:'top',
        backgroundColor:'#ffffff',
        fontSize:16,
        lineHeight:24
    }

})


export default Edit
