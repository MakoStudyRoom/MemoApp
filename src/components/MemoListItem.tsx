import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import Icon from './Icon'
import {Link} from 'expo-router'

const MemoListItem =() : React.JSX.Element => {
    return(
        <Link href ='/memo/detail' asChild>
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text style={styles.memoListItemTitle}>買い物リスト</Text>
                    <Text style={styles.memoListItemDate}>2026年1月1日</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="delete" size={32} color="#B0B0B0"/>
                </TouchableOpacity>
            </TouchableOpacity>
        </Link>
    )
}

const styles = StyleSheet.create({
    memoListItem:{
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
    memoListItemTitle:{
        fontSize: 16,
        lineHeight: 32,
        color: '#000000'
    },
    memoListItemDate:{
        fontSize: 12,
        lineHeight: 16,
        color: '#848484'
    }
})

export default MemoListItem
