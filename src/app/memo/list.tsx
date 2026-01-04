import { View, StyleSheet } from 'react-native'
//import {Feather} from '@expo/vector-icons'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'

import { useEffect } from 'react'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

import { router , useNavigation } from 'expo-router'

const handlePress = (): void => {
    // メモ作成画面へ遷移
    router.push('/memo/create')
}


const List = (): React.JSX.Element => {
    const navigation = useNavigation()

    useEffect( () => {
        navigation.setOptions({
            headerRight: () => { return( <LogOutButton/>) }
        })
    }, [] )

    return (
        <View style={styles.container}>
            <View>
                {/* メモ1 */}
                <MemoListItem />
                {/* メモ2 */}
                <MemoListItem />
                {/* メモ3 */}
                <MemoListItem />
            </View>
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
