import {View, Text,ScrollView, StyleSheet} from 'react-native'
import { Feather }from '@expo/vector-icons'
import Icon from '../../components/icon'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
const Detail = (): React.JSX.Element => {
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年1月1日</Text>
            </View>
            <ScrollView>
                <View style={styles.memoBody}>
                    <Text style={styles.memoBodyText}>
                        買い物リスト
                        書体やレイアウトなどを確認するために用います。
                        本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    </Text>
                </View>
            </ScrollView>
            <CircleButton style={{top : 160 , bottom: 'auto'}}>
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
        fontSize:16,
        lineHeight:24,
        color: '#000000'
    }
})

export default Detail
