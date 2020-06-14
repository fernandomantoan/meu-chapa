import React, { useState, useEffect, Component } from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Picker, Slider, ColorPropType } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dropdown } from "react-native-material-dropdown";
import { TextInput, Button } from "react-native-paper";

const Freight = () => {
    const [axis, setAxis] = useState<number>(0);
    const [truckageValue, setTruckageValue] = useState<string>("");
    const [selectedFreightType, setSelectedFreightType] = useState<string>("");
    const [selectedLoadType, setSelectedLoadType] = useState<string>("");
    const [selectedAxisQuantity, setSelectedAxisQuantity] = useState<string>("2");
    const [distance, setDistance] = useState<string>("");

    const freigthTypes = [
        {
            value: "Conjunto Completo ou Caminhão"
        }, {
            value: 'Somente Cavalo Mecânico',
        }, {
            value: 'Conjunto Completo ou Caminhão de Alto Desempenho (Roda 24h)',
        }, {
            value: 'Somente Cavalo Mecânico de Alto Desempenho (Roda 24h)',
        }];

    const loadTypes = [
        {
            value: "Granel Líquido",
            label: "Ble"
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
    ]

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
        <SafeAreaView style={{ flex: 1}}>
            <View style = { styles.container }>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity onPress={handleNavigationBack}>
                    <Icon name="arrow-left" size={24} color="#34cb79"/>
                </TouchableOpacity>
                <Text style={{ fontSize: 24, fontWeight: 'bold', textAlignVertical: 'center'}}>Cálculo de Frete</Text>
                </View>
                <View>
                    <Dropdown
                        label="Tipo do Frete"
                        data={freigthTypes}
                        onChangeText={(value) => handleFreightTypeChange(value)}/>
                    <Dropdown
                        label="Tipo da Carga"
                        data={loadTypes}
                        onChangeText={(value) => handleLoadTypeChange(value)}/>
                    <Text style={ styles.formLabel }>Quantidade de Eixos ({selectedAxisQuantity} eixos)</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={ [styles.formLabel, { color: "green", width: "5%" } ]}>2</Text>
                        <Slider style={{ width: "90%", marginTop: 16 }}minimumValue={2} maximumValue={9} step={1} onValueChange={ (value) => handleAxisChange(String(value)) }/>
                        <Text style={ [styles.formLabel, { color: "green", width: "5%" } ]}>9</Text>
                    </View>
                    <TextInput
                        style={{ marginTop: 16 }}
                        label='Distância (km)'
                        value={distance}
                        mode="outlined"
                        onChangeText={text => setDistance(text)}
                    />
                    <Button style={ styles.button } compact={true} mode="contained" onPress={() => calculateTruckage() }>
                        Calcular
                    </Button>
                </View>           
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

    formLabel: {
        marginTop: 16,
        paddingVertical: 8,
        fontSize: 16,
        fontWeight: "bold",
        color: "grey"
        // fontFamily: 'Roboto_400Regular'
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
        // fontFamily: 'Roboto_500Medium',
        maxWidth: 260,
        marginTop: 16,
    },

    titleFooter: {
        color: '#322153',
        fontSize: 24,
        // fontFamily: 'Roboto_500Medium',
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
    //   fontFamily: 'Roboto_400Regular',
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
    //   fontFamily: 'Roboto_400Regular',
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
    //   fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      fontSize: 14,
    },
  });

export default Freight;