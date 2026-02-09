import { View, StyleSheet,FlatList } from 'react-native'
//import {Feather} from '@expo/vector-icons'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { collection, onSnapshot , query ,orderBy } from 'firebase/firestore'
import { useEffect , useState } from 'react'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import { router , useNavigation } from 'expo-router'

import {type Memo} from '../../types/memo'

import { db, auth } from '../../config'

const handlePress = (): void => {
    // メモ作成画面へ遷移
    router.push('/memo/create')
}


const List = (): React.JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect( () => {
        navigation.setOptions({
            headerRight: () => { return( <LogOutButton/>) }
        })
    }, [] )

    useEffect(()=>{
        if(auth.currentUser == null){ return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref ,orderBy('updatedAt','desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos : Memo[] = []
            snapshot.forEach((doc) => {
                const { bodyText, updatedAt} = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    bodyText: bodyText,
                    updatedAt: updatedAt
                })
            })
            setMemos(remoteMemos)
        })
        return unsubscribe
    },[])

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={( {item} ) => <MemoListItem memo={item}/>}
            />
            <CircleButton onPress={handlePress}>
                {/* <Feather name = 'plus' size = {40}/> */}
                <Icon name='pencil' size={40} color='yellow'/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})
export default List
