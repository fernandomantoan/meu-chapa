import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Slider } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Dropdown, DropDownData } from "react-native-material-dropdown";
import { Appbar, TextInput, Button } from "react-native-paper";
import styles from './styles';

const Freight = () => {
    const [freigthTypes, setFreigthTypes] = useState<DropDownData[]>([]);
    const [loadTypes, setLoadTypes] = useState<DropDownData[]>([]);
    const [selectedFreightType, setSelectedFreightType] = useState<string>("");
    const [selectedLoadType, setSelectedLoadType] = useState<string>("");
    const [selectedAxisQuantity, setSelectedAxisQuantity] = useState<string>("2");
    const [distance, setDistance] = useState<string>("");
    const [autonomy, setAutonomy] = useState<string>("");
    const [averagePrice, setAveragePrice] = useState<string>("");

    useEffect(() => {
        setFreigthTypes([
            {
                value: "Conjunto Completo ou Caminhão"
            }, {
                value: 'Somente Cavalo Mecânico',
            }, {
                value: 'Conjunto Completo ou Caminhão de Alto Desempenho (Roda 24h)',
            }, {
                value: 'Somente Cavalo Mecânico de Alto Desempenho (Roda 24h)',
            }
        ]);

        setLoadTypes([
            {
                value: "Granel Líquido",
            },
            {
                value: "Frigorificada"
            },
            {
                value: "Conteinerizada"
            },
            {
                value: "Carga Geral"
            },
            {
                value: "Neogranel"
            },
            {
                value: "Perigosa (granel sólido)"
            },
            {
                value: "Perigosa (frigorificada)"
            },
            {
                value: "Perigosa (conteinerizada)"
            },
            {
                value: "Perigosa (carga geral)"
            },
            {
                value: "Carga Granel Pressurizada"
            },
        ]);
    }, []);

    const navigation = useNavigation();

    function handleNavigationBack() {
        navigation.goBack();
    }

    function handleFreightTypeChange(value: string) {
        setSelectedFreightType(value);
    }

    function handleLoadTypeChange(value: string) {
        setSelectedLoadType(value);
    }

    function handleAxisChange(value: string) {
        setSelectedAxisQuantity(value);
    }

    function calculateTruckage() {
        navigation.navigate("FreightResult");
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { handleNavigationBack() }} />
                <Appbar.Content title="Cálculo de Frete" />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Dropdown
                            label="Tipo do Frete"
                            data={freigthTypes}
                            value={selectedFreightType}
                            onChangeText={(value) => handleFreightTypeChange(value)} />
                        <Dropdown
                            label="Tipo da Carga"
                            data={loadTypes}
                            value={selectedLoadType}
                            onChangeText={(value) => handleLoadTypeChange(value)} />
                        <Text style={styles.formLabel}>Quantidade de Eixos ({selectedAxisQuantity} eixos)</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={[styles.formLabel, { color: "green", width: "5%" }]}>2</Text>
                            <Slider style={{ width: "90%", marginTop: 16 }} minimumValue={2} maximumValue={9} step={1} onValueChange={(value) => handleAxisChange(String(value))} />
                            <Text style={[styles.formLabel, { color: "green", width: "5%" }]}>9</Text>
                        </View>
                        <TextInput
                            style={{ marginTop: 16, backgroundColor: 'white' }}
                            label='Distância (km)'
                            value={distance}
                            mode="outlined"
                            onChangeText={text => setDistance(text)}
                        />
                        <TextInput
                            style={{ marginTop: 16, backgroundColor: 'white' }}
                            label='Autonomia do caminhão (km/litro)'
                            value={autonomy}
                            mode="outlined"
                            onChangeText={text => setAutonomy(text)}
                        />
                        <TextInput
                            style={{ marginTop: 16, backgroundColor: 'white' }}
                            label='Preço médio do combustível (R$)'
                            value={averagePrice}
                            mode="outlined"
                            onChangeText={text => setAveragePrice(text)}
                        />
                        <Button style={styles.button} compact={true} mode="contained" onPress={() => calculateTruckage()}>
                            Calcular
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Freight;