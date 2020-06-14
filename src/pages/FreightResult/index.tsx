import React, { useState } from 'react';
import { View, Text, SafeAreaView, Share } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather as Icon, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Button, Card } from "react-native-paper";
import styles from './styles';

const FreightResult = () => {
    const [axis, setAxis] = useState<number>(0);
    const [truckageValue, setTruckageValue] = useState<string>("");
    const [selectedFreightType, setSelectedFreightType] = useState<string>("");
    const [selectedLoadType, setSelectedLoadType] = useState<string>("");
    const [selectedAxisQuantity, setSelectedAxisQuantity] = useState<string>("2");
    const [distance, setDistance] = useState<string>("");

    const navigation = useNavigation();

    function handleNavigationBack() {
        navigation.goBack();
    }

    function calculateTruckage() {
        setTruckageValue("R$ 2.000,00");
    }

    async function handleShare() {
        try {
            await Share.share({
                message: '5600',
            });
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { handleNavigationBack() }} />
                <Appbar.Content title="Frete Calculado" />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.container}>
                    <Card style={styles.cardContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                            <Text style={styles.cardTitle}>Informações do Frete</Text>
                            <Button onPress={() => handleNavigationBack()}>
                                <FontAwesome5 name="edit" size={16} />
                            </Button>
                        </View>
                        <Text style={styles.cardText}>Distância: 800 km</Text>
                        <Text style={styles.cardText}>Nº de eixos: 3</Text>
                        
                        <View style={{ flexDirection: "row", marginTop: 16, marginHorizontal: 8, alignItems: "center" }}>
                            <FontAwesome5 style={styles.cardIcon} name="truck-loading" size={16}></FontAwesome5>
                            <Text style={styles.cardText}>Carga Granel Líquido</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 16, marginHorizontal: 8, alignItems: "center" }}>
                            <FontAwesome5 style={styles.cardIcon} name="truck" size={16}></FontAwesome5>
                            <Text style={styles.cardText}>Conjunto Completo</Text>
                        </View>
                    </Card>
                    <Card style={styles.cardContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                            <Text style={styles.cardTitle}>Custos do Transporte</Text>
                            <Button onPress={() => handleNavigationBack()}>
                                <FontAwesome5 name="edit" size={16} />
                            </Button>
                        </View>
                        <Text style={styles.cardText}>Preço do Combustível: R$3,60</Text>
                        <Text style={styles.cardText}>Autonomia: 2km/litro</Text>
                        <Text style={styles.cardText}>Total de Pedágio: R$120,00</Text>
                    </Card>
                    <Card style={styles.cardContainer}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
                            <Text style={styles.cardTitle}>Valor do Frete</Text>
                        </View>
                        <View style={styles.resultContainer}>
                            <Text style={styles.resultText}>R$ 3.600,00</Text>
                            <Button onPress={() => handleShare()}>
                                <FontAwesome5 name="whatsapp" style={{ color: "green" }} size={32}></FontAwesome5>
                            </Button>
                        </View>
                        <Text style={styles.cardRedText}>Custos: - R$1.560,00</Text>
                        <Text style={styles.cardGreenText}>Lucro: R$2.040,00</Text>
                        <Text style={{ marginTop: 40, marginHorizontal: 8 }}>
                            Cálculo realizado de acordo com resolução ANTT nº 5.687/2020.
                        </Text>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default FreightResult;