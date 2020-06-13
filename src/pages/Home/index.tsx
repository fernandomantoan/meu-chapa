import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from "../../../assets/Avatar.png";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {

    const navigation = useNavigation();

    function handleNavigateToHealth() {
        navigation.navigate('Health');
    }

    function handleNavigateToFreight() {
        navigation.navigate('Freight');
    }

    function handleNavigateToHealthVideos() {
        navigation.navigate('HealthVideos');
    }

    function handleNavigateToMaps() {
        navigation.navigate('PointsMap');
    }

    function handleNavigateToPhones() {
        navigation.navigate('Freight');
    }

    function handleNavigateToRewards() {
        navigation.navigate('Freight');
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.extendedToolbar}>
                    <Avatar.Image size={120} source={Photo} />
                </View>
                <TouchableOpacity onPress={() => handleNavigateToHealth()}>
                    <MaterialIcons name="favorite" size={32} />
                    <Text>Minha Saúde</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigateToFreight()}>
                    <MaterialIcons name="local-shipping" size={32} />
                    <Text>Cálculo de Frete</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigateToHealthVideos()}>
                    <MaterialIcons name="local-movies" size={32} />
                    <Text>Vídeos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigateToMaps()}>
                    <MaterialIcons name="place" size={32} />
                    <Text>Pontos de Interesse</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigateToPhones()}>
                    <MaterialIcons name="phone" size={32} />
                    <Text>Telefones Úteis</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleNavigateToRewards()}>
                    <MaterialIcons name="shopping-cart" size={32} />
                    <Text>Recompensas</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    }
});

export default Home;