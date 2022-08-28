import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

const Home = () => {
    return (
        <View style={styles.home}>
            <Text style={styles.heading}>Home</Text>
            <View style={styles.cards} >
                <WeatherCard />
                <WeatherCard />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 2,
    },
    heading: {
        marginTop: 60,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
    },
    cards: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        borderWidth: 2,
        height: 20,
    },
});

export default Home;
