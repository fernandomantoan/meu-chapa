import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Appbar, TextInput, Button, useTheme } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from './styles';
import { services } from "../../storage";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Service } from "../../entities/Entities";

const PointForm = () => {

    const { colors } = useTheme()
    const navigation = useNavigation();

    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    function handleSelectService(id: number) {
        const alreadySelected = selectedServices.findIndex((s) => s.id === id);
        if (alreadySelected >= 0) {
            const filteredServices = selectedServices.filter((s) => s.id !== id);
            setSelectedServices(filteredServices);
        } else {
            const service = services.find((s) => s.id === id) as Service;
            setSelectedServices([...selectedServices, service]);
        }
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Adicionar Ponto de Interesse" />
                <Appbar.Action icon="check" onPress={() => { navigation.goBack() }} />
            </Appbar.Header>
            <View>
                <TextInput label="Nome do Ponto de Interesse" style={styles.textInput} />
                <TextInput label="Descrição" style={styles.textInput} />
                <Button style={styles.actionButtons} dark icon="camera" mode="contained" color={colors.accent} onPress={() => { }}>
                    Tirar Foto
                </Button>
                <Button style={styles.actionButtons} dark icon="crosshairs-gps" mode="contained" color={colors.accent} onPress={() => { }}>
                    Usar Localização Atual
                </Button>
            </View>
            <View>
                <Text style={styles.subTitle}>Serviços oferecidos</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}>
                {services.map((service) => (
                    <TouchableOpacity key={String(service.id)} style={[
                        styles.serviceItem,
                        selectedServices.find((s) => s.id == service.id) ? styles.selectedItem : {},
                    ]}
                        onPress={() => { handleSelectService(service.id) }}>
                        <Icon name={service.icon} size={24} />
                        <Text>{service.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
}

export default PointForm;