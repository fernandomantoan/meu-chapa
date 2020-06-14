import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },
    cardContainer: {
        marginTop: 16,
        padding: 10
    },
    cardText: {
        color: "grey",
        fontSize: 16,
        marginTop: 8
    },
    cardRedText: {
        color: "red",
        fontSize: 16,
        marginTop: 8
    },
    cardGreenText: {
        color: "green",
        fontSize: 16,
        marginTop: 8
    },
    cardTitle: {
        flex: 1,
        fontSize: 18,
        color: '#575757'
    },

    cardIcon: {
        marginRight: 8
    },

    resultContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 16,
        alignItems: "center",
    },

    resultText: {
        fontSize: 36,
        color: "grey",
    }
});

export default styles;