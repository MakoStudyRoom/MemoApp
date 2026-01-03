import { Text,TouchableOpacity, StyleSheet, Alert } from 'react-native'

interface Props{
    label:string
    onPress?:()=>void
}


const Button = (props:Props):React.JSX.Element=>{
    const {label , onPress } = props
    return(
        <TouchableOpacity onPress ={onPress}  style={styles.button}>
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#467FD3',
        alignSelf:'flex-start',
        borderRadius:4,
        marginBottom: 24
    },
    buttonLabel:{
        fontSize:16,
        lineHeight:32,
        paddingVertical:8,
        paddingHorizontal:24,
        color:'#ffffff'
    }
})

export default Button
