import {View,Text,TouchableOpacity,StyleSheet , Alert} from 'react-native'
import Icon from './Icon'
import {Link} from 'expo-router'
import {type Memo} from '../types/memo'
import {deleteDoc, doc} from 'firebase/firestore'
import {db , auth} from '../config'


interface Props{
    memo : Memo
}

const MemoListItem =(props : Props) : React.JSX.Element | null => {
    const {memo} = props
    const {bodyText, updatedAt} = memo
    if(bodyText === null || updatedAt == null) {return null}
    const dataString = updatedAt.toDate().toLocaleString('ja-JP')

    const deletePress = (id : string) : void => {
        if(auth.currentUser === null){ return }
        const ref = doc(db , `users/${auth.currentUser.uid}/memos` , id)
//        const ref = doc(db, `users/niEjKTNTsdfROwqhe4zBsTy9GUn1/memos`, id)
        Alert.alert("メモを削除しますか？","よろしいですか？",[
            {
                text: 'キャンセル'
            },
            {
                text: '削除する',
                style: 'destructive',
                onPress: () => {
                    deleteDoc(ref)
                        .catch(() => { Alert.alert('削除に失敗しました')})
                }
            }
        ])
    }

    return(
        <Link
            href ={{pathname : '/memo/detail', params: { id: memo.id} }}
            asChild
        >
            <TouchableOpacity style={styles.memoListItem}>
                <View>
                    <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
                    <Text style={styles.memoListItemDate}>{dataString}</Text>
                </View>
                <TouchableOpacity onPress ={() => {deletePress(memo.id)}}>
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
