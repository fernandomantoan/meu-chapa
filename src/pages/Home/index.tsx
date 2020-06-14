import React from "react";
import { View, Text } from "react-native";
import { Avatar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Photo from "../../../assets/Avatar.png";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import styles from './styles'

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
        navigation.navigate('Phones');
    }

    function handleNavigateToRewards() {
        navigation.navigate('Rewards');
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.extendedToolbar}>
                    <Avatar.Image size={120} source={Photo} />
                    <Text style={styles.username}>Antônio José da Silva</Text>
                    <Text style={styles.points}>500 Chapa Pontos</Text>
                </View>
            </View>

            <ScrollView>
                <View style={styles.content}>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateToHealth()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="favorite" color="#E05050" size={48} />
                                    <Text style={styles.text}>Minha Saúde</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateToFreight()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="local-shipping" color="#745C5C" size={48} />
                                    <Text style={styles.text}>Cálculo de Frete</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateToHealthVideos()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="local-movies" color="#575757" size={48} />
                                    <Text style={styles.text}>Vídeos</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateToMaps()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="place" color="#3F8D2D" size={48} />
                                    <Text style={styles.text}>Pontos de Interesse</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateToPhones()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="phone" color="#1976D2" size={48} />
                                    <Text style={styles.text}>Telefones Úteis</Text>
                                </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.buttonContainer}
                        onPress={() => handleNavigateToRewards()}>
                                <View style={styles.buttonContent}>
                                    <MaterialIcons name="shopping-cart" color="#FFC107" size={48} />
                                    <Text style={styles.text}>Recompensas</Text>
                                </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

export default Home;