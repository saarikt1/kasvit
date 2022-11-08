import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Kasvi from "./Kasvi"

export default function App() {
    const [time, setTime] = useState(new Date())

    const updateTimestamp = () => {
        setTime(new Date())
    }


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
