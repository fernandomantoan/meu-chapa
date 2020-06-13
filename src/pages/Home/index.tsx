import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Toolbar, Avatar, COLOR } from "react-native-material-ui";
import Photo from "../../../assets/Avatar.png";

const Home = () => {
    return (
        <View style={styles.container}>
            <Toolbar
                key="toolbar"
                leftElement=""
                centerElement=""
            />
            <View style={styles.extendedToolbar}>
                <Avatar image={(
                    <Image source={Photo} />
                )} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    extendedToolbar: {
        backgroundColor: COLOR.blue500,
        height: 200,
        alignItems: "center"
    },
    avatar: {
        width: 102,
        height: 102
    }
});

export default Home;