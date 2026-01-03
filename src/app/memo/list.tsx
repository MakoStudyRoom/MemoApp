import { View, StyleSheet } from 'react-native'
//import {Feather} from '@expo/vector-icons'
import Icon from '../../components/icon'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const List = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                {/* メモ1 */}
                <MemoListItem />
                {/* メモ2 */}
                <MemoListItem />
                {/* メモ3 */}
                <MemoListItem />
            </View>
            <CircleButton>
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
