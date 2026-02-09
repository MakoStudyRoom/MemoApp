import {View, Text,ScrollView, StyleSheet} from 'react-native'
//import { Feather }from '@expo/vector-icons'
import Icon from '../../components/Icon'

import { router, useLocalSearchParams } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import { useState , useEffect } from 'react'

import { onSnapshot , doc } from 'firebase/firestore'
import { auth, db } from '../../config'
import { type Memo } from '../../types/memo'


const handlePress = (id:string):void => {
    // メモ編集画面へ遷移
    router.push({pathname:'/memo/edit', params:{id}})
}


const Detail = (): React.JSX.Element => {
    const id = String(useLocalSearchParams().id)
    console.log('details',{id})
    const [ memo , setMemo ] = useState< Memo | null>(null)
    useEffect(() => {
        if(auth.currentUser === null) { return }
        const ref = doc(db , `users/${auth.currentUser.uid}/memos` , id)
        const unsubscribe = onSnapshot(ref , (memoDoc) => {
            if (memoDoc.exists()) {
                const{ bodyText , updatedAt } = memoDoc.data() as Memo
                setMemo({
                    id: memoDoc.id,
                    bodyText,
                    updatedAt
                })
            }
        })
        return unsubscribe
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle} numberOfLines={1}>{memo?.bodyText}</Text>
                <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
            </View>
            <ScrollView>
                <View style={styles.memoBody}>
                    <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
                </View>
            </ScrollView>
            <CircleButton onPress ={() => {handlePress(id)}} style={{top : 60 , bottom: 'auto'}}>
                {/* <Feather name="check" size={40}/> */}
                <Icon name="pencil" size={40} color="white"/>
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#FFFFFF',
        fontSize:20,
        lineHeight:32,
        fontWeight:'bold'
    },
    memoDate:{
        color: '#FFFFFF',
        fontSize:12,
        lineHeight:16
    },
    memoBody:{
        paddingVertical:32,
        paddingHorizontal:27
    },
    memoBodyText:{
        paddingVertical:32,
        fontSize:16,
        lineHeight:24,
        color: '#000000'
    }
})

export default Detail
