import {StyleSheet, Text, View} from 'react-native';
import Kasvi from "./Kasvi"

export default function App() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kasvit</Text>
            <Kasvi/>
            <Kasvi/>
            <Kasvi/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        margin: 16
    }
});
