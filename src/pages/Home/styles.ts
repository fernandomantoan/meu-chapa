import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    },
    extendedToolbar: {
        backgroundColor: "#2196F3",
        height: 200,
        alignItems: "center",
        paddingTop: 10
    },
    avatar: {
        width: 102,
        height: 102
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
        height: 110,
        width: 110,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#868686',
        marginTop: 10
    },
    username: {
        color: '#FFFFFF',
        fontSize: 24,
        marginTop: 5
    },
    points: {
        color: '#FFFFFF',
        fontSize: 18,
        marginTop: 5
    }
});

export default styles;