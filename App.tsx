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
            <Text style={styles.header}>Kasvit</Text>
            <View>
                <Text style={plantStyles.header}>Traakkipuu</Text>
                <View style={plantStyles.actionRow}>
                    <Text>Water in 4 days</Text>
                    <Button
                        onPress={updateTimestamp}
                        title="Mark watered"
                    />
                </View>
            </View>
            <Text>{time.toTimeString()}</Text>
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

const plantStyles = StyleSheet.create({
        actionRow: {
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        header: {
            fontSize: 20
        }
    }
)
