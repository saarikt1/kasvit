import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function Kasvi() {
    const [time, setTime] = useState(new Date())

    const updateTimestamp = () => {
        setTime(new Date())
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Traakkipuu</Text>
            <View style={styles.actionRow}>
                <Text>Water in 4 days</Text>
                <Button
                    onPress={updateTimestamp}
                    title="Mark watered"
                />
            </View>
            <Text>{time.toTimeString()}</Text>
        </View>
    )
        ;
}

const styles = StyleSheet.create({
    container: {
     paddingBottom: 24
    },
        actionRow: {
            flexDirection: 'row',
            justifyContent: "space-between"
        },
        header: {
            fontSize: 20
        }
    }
)
