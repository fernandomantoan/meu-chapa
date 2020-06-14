import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker, LatLng, Point } from 'react-native-maps';
import { Appbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { InterestPoint } from "../../entities/Entities";
import { points as StoragePoints } from "../../storage";
import Photo from "../../../assets/Avatar.png";

const PointsMap = () => {
    const points: InterestPoint[] = StoragePoints;

    const navigation = useNavigation();

    function handleNavigateToDetail(id: number) {
        navigation.navigate("PointDetail", { point_id: id });
    }

    function handleNavigateToAdd() {
        navigation.navigate("PointForm");
    }

    function getPlaceImage(type: string) {
        switch (type) {
            case 'restaurant':
                return require('../../../assets/Restaurante.png');
            case 'health':
                return require('../../../assets/Saude.png');
            default:
                return require('../../../assets/Posto.png');
        }
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Pontos de Interesse" />
                <Appbar.Action icon="plus" onPress={() => { handleNavigateToAdd() }} />
            </Appbar.Header>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: -23.0000745,
                    longitude: -47.0333882,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                }}>
                <Marker coordinate={{
                    latitude: -23.0000745,
                    longitude: -47.0333882
                }}>
                    <Image source={Photo} style={styles.mapMarkerImage} />
                </Marker>
                {points.map((point) => (
                    <Marker key={String(point.id)} onPress={() => handleNavigateToDetail(point.id)}
                        coordinate={{
                            latitude: point.latitude,
                            longitude: point.longitude
                        }}>
                        <Image source={getPlaceImage(point.type)} style={styles.mapMarkerPlaceImage} />
                    </Marker>
                ))}
            </MapView>
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        width: "100%",
        height: "100%",
    },
    mapMarkerImage: {
        width: 48,
        height: 48,
        resizeMode: "cover",
    },
    mapMarkerPlaceImage: {
        width: 64,
        height: 64,
        resizeMode: "cover",
    },
});

export default PointsMap;