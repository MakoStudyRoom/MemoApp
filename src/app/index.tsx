import { View, Text , StyleSheet } from 'react-native'

const Index = (): React.JSX.Element => {
    return (
        <View style={styles.container}>
            <View>
                {/* ヘッダー */}
                <Text>Memo App</Text>
                <Text>ログアウト</Text>
            </View>

            {/* メモ1 */}
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2026年1月1日</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            {/* メモ2 */}
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2026年1月1日</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            {/* メモ3 */}
            <View>
                <View>
                    <View>
                        <Text>買い物リスト</Text>
                        <Text>2026年1月1日</Text>
                    </View>
                    <View>
                        <Text>X</Text>
                    </View>
                </View>
            </View>
            <View>
                {/* + */}
                <Text>+</Text>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})

export default Index
