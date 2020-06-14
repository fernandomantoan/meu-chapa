import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    input: {
        backgroundColor: 'white'
    },
    title: {
        fontSize: 16,
        color: '#575757',
        marginBottom: 5
    },
    card: {
        margin: 14,
        width: '50%'
    },
    gridList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
});

export default styles;