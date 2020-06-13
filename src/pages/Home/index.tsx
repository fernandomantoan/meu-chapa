import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from 'react-native-paper';
import Photo from "../../../assets/Avatar.png";

const Home = () => {
    return (
        <View style={styles.container}>
            {
            <View style={styles.extendedToolbar}>
                <Avatar.Image size={24} source={Photo} />
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    extendedToolbar: {
        backgroundColor: "#2196F3",
        height: 200,
        alignItems: "center"
    },
    avatar: {
        width: 102,
        height: 102
    }
});

export default Home;