import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },

    cardText: {
        color: "grey",
        fontSize: 16
    },

    cardIcon: {
        marginRight: 8
    },

    resultContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 16,
        alignItems: "center"
    },

    resultText: {
        fontSize: 36,
        color: "grey"
    }
});

export default styles;