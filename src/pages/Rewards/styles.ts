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
        marginTop: 15,
        width: '100%'
    },
    gridList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    cardContent: {
        paddingLeft: 4,
        paddingRight: 4,
    },
    rewardTitle: {
        fontSize: 16,
        color: '#575757',
        marginTop: 5,
    },
    rewardDescription: {
        fontSize: 12,
        color: '#777',
        marginTop: 5
    },
    rewardPoints: {
        fontSize: 14,
        color: '#2196F3',
        marginTop: 5
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10
    }
});

export default styles;