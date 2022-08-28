import { StyleSheet, Text, View } from "react-native";
import Home from "./containers/Home/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});