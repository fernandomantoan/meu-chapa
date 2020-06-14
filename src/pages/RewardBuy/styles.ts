import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    imageContainer: {
        height: 200,
        width: '100%',
    },
    title: {
        fontSize: 20,
        paddingVertical: 15
    },
    paragraph: {
        marginBottom: 10
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10
    },
    actionsContainer: {
        justifyContent: 'center'
    }
});

export default styles;