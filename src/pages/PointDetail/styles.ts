import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    transparentAppBar: {
        color: '#fff',
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        zIndex: 1
    },
    title: {
        fontSize: 32,
        marginTop: 20
    },
    container: {
        padding: 10
    },
    imageContainer: {
        position: 'relative'
    },
    fabFavorite: {
        bottom: -25,
        left: '45%',
        position: 'absolute'
    },
    favoritesContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    subtitle: {
        fontSize: 20
    }
});

export default styles;