import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#fff',
        margin: 10
    },
    actionButtons: {
        margin: 10
    },
    serviceItem: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#eee",
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: "center",
    },
    subTitle: {
        margin: 10,
        fontSize: 16
    },
    selectedItem: {
        borderColor: '#2196F3',
        borderWidth: 2
    }
});

export default styles;