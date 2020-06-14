import React from "react";
import { View, Text } from "react-native";
import { Appbar, Button, useTheme, List, Divider } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { Linking } from "expo";
import { ScrollView } from "react-native-gesture-handler";
import { phones } from "../../storage";

const Phones = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    function handlePressPhone(phone: string) {
        const url = `tel:${phone}`
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url)
                        .catch(() => null);
                }
            });
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Telefones Úteis" />
            </Appbar.Header>
            <View style={styles.container}>
                <Button onPress={() => { console.log("Buscar localização"); }} dark={true} icon="crosshairs-gps" color={colors.accent} mode="contained">Buscar Localização Atual</Button>
                <ScrollView>
                    {phones.map((phone) => (
                        <View key={String(phone.id)}>
                            <List.Item onPress={() => { handlePressPhone(phone.phone) }}
                                title={phone.name}
                                description={phone.phone}
                                right={props => <List.Icon {...props} icon="phone" />} />
                            <Divider />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </>
    );
};

export default Phones;