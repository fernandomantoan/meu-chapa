import React, { useState, useEffect, Component } from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Picker, Slider, ColorPropType } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dropdown } from "react-native-material-dropdown";
import { TextInput, Button, Card, Divider } from "react-native-paper";
import { FontDisplay } from 'expo-font';

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

    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style = { styles.container }>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlignVertical: 'center'}}>Frete calculado para</Text>
                <Card style={{ marginTop: 16 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8, marginLeft: 8 }}>
                        <Text style={ styles.cardText }>800 km</Text>
                        <Text style={ styles.cardText }>3 eixos</Text>
                        <Button onPress={() => handleNavigationBack()}>
                            <FontAwesome5 name="edit" size={16}/>
                        </Button>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 16, marginHorizontal: 8, alignItems: "center" }}>
                        <FontAwesome5 style={styles.cardIcon} name="truck-loading" size={16}></FontAwesome5>
                        <Text style={ styles.cardText }>Carga Granel Líquido</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 16, marginHorizontal: 8, alignItems: "center" }}>
                        <FontAwesome5 style={styles.cardIcon} name="truck" size={16}></FontAwesome5>
                        <Text style={ styles.cardText }>Conjunto Completo</Text>
                    </View>
                    <Divider style={{ marginVertical: 16 }}/>
                    <View style={ styles.resultContainer }>
                        <Text style={ styles.resultText }>R$ 1.600,00</Text>
                        <Button>
                            <FontAwesome5 name="whatsapp" style={{ color: "green" }} size={32}></FontAwesome5>
                        </Button>
                    </View>
                    <Text style={{ marginTop: 40, marginHorizontal: 8}}>
                        Cálculo realizado de acordo com resolução ANTT nº 5.687/2020.
                    </Text>
                </Card>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      paddingHorizontal: 32,
      paddingTop: Constants.statusBarHeight,
    //   alignItems: "center"
    },

    cardText: {
        color: "grey",
        fontSize: 16
    }, 

    cardIcon: {
        marginRight: 8
    },

    resultContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 16,
        alignItems: "center"
    },

    resultText: {
        fontSize: 36,
        color: "grey"
    }
  });

export default FreightResult;