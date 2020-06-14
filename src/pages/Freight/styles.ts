import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 32,
    },

    formLabel: {
        marginTop: 16,
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: "bold",
        color: "grey"
    },

    formPicker: {
        paddingHorizontal: 8,
        fontSize: 16,
        width: 310,
        height: 50
    },

    input: {
        height: 45,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal: 16,
        fontSize: 16,
    },

    footer: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#999',
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: 'column',
        alignItems: "center"
    },

    title: {
        color: '#322153',
        fontSize: 24,
        maxWidth: 260,
        marginTop: 16,
    },

    titleFooter: {
        color: '#322153',
        fontSize: 24,
        maxWidth: 260,
        marginTop: 8,
    },

    button: {
        backgroundColor: '#FFC107',
        marginTop: 16,
    },

    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 4,
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
    },

    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    },

    mapMarkerTitle: {
        flex: 1,
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23,
    },

    itemsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        marginBottom: 32,
    },

    item: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 16,
        marginRight: 8,
        alignItems: 'center',
        justifyContent: 'space-between',

        textAlign: 'center',
    },

    selectedItem: {
        borderColor: '#34CB79',
        borderWidth: 2,
    },

    itemTitle: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default styles;