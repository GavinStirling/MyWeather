import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WeatherCard = () => {
    return (
        <View style={styles.card}>
            <Text>Weather Card</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        fontSize: 20,
        borderWidth: 2,
    },
});

export default WeatherCard;
