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
    divider: {
        borderColor: '#868686',
        borderWidth: 1,
        height: 20,
        marginLeft: 15,
        marginRight: 15
    },
    progress: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    actualProgress: {
        marginTop: 5,
        alignItems: 'center',
    },
    progressTitle: {
        fontSize: 12,
        color: '#777'
    },
    progressActualValue: {
        fontSize: 24,
        color: '#E05050',
        fontWeight: '600'
    },
    progressGoalValue: {
        fontSize: 24,
        color: '#3F8D2D',
        fontWeight: '600'
    },
    card: {
        marginTop: 14,
        padding: 10
    },
    icon: {
        margin: 0,
        padding: 0,
        marginRight: 5,
        color: '#575757'
    },
    activitiesText: {
        marginTop: 10,
        fontSize: 20,
        color: '#575757'

    },
    listItemPoints: {
        marginTop: 18,
        fontSize: 12,
        color: '#3F8D2D',
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default styles;