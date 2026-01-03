import{View,Text,StyleSheet} from 'react-native'

const Header =() : React.JSX.Element => {
    return(
            <View style={styles.header}>
                <View style={styles.headerInnner}>
                    {/* ヘッダー */}
                    <Text style={styles.headerTitle}>Memo App</Text>
                    <Text style={styles.headerRight}>ログアウト</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#467FD3',
        height : 104,
        justifyContent : 'flex-end'
    },
    headerInnner:{
        alignItems : 'center'
    },
    headerRight:{
        position : 'absolute',
        right:19,
        bottom:8,
        color: 'rgba(255,255,255,0.7)'
    },
    headerTitle:{
        marginBottom:8,
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        color : '#ffffff'
    }
})

export default Header
