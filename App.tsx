import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
    const [time, setTime] = useState(new Date())

    const updateTimestamp = () => {
        setTime(new Date())
    }


    return (
        <View style={styles.container}>
            <Text>Kasvit</Text>
            <Button
                onPress={updateTimestamp}
                title="Water"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
