import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 24
    },
    title: {
        fontSize: 16,
        color: '#575757',
        marginBottom: 5
    },
    subtitle: {
        fontSize: 14,
        color: '#575757'
    },
    cardTitleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    titleText: {
        flex: 1,
        fontSize: 18,
        color: '#575757'
    },
    watched: {
        color: '#3F8D2D',
        fontSize: 12,
        alignItems: 'center',
        textAlign: 'center'
    },
    icon: {
        margin: 0,
        padding: 0,
        marginLeft: 5,
        color: '#3F8D2D',
    },
    videoContainer: {
        marginTop: 20
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default styles;