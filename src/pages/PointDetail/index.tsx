import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Appbar, FAB, List, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { points as StoragePoints } from "../../storage";
import { InterestPoint } from "../../entities/Entities";
import styles from "./styles";

interface Params {
    point_id: number;
}

const PointDetail = () => {
    const [point, setPoint] = useState<InterestPoint>({} as InterestPoint);
    const points: InterestPoint[] = StoragePoints;

    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as Params;


    useEffect(() => {
        const id = routeParams.point_id;
        const pointFound = points.find(p => p.id === id) as InterestPoint
        setPoint(pointFound);
    }, []);

    return (
        <>
            <Appbar.Header style={styles.transparentAppBar} dark={true}>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
            </Appbar.Header>
            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/restaurante_background.png')} />
                <FAB style={styles.fabFavorite} icon="star" />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{point.name}</Text>
                <View style={styles.favoritesContainer}>
                    <MaterialIcons color="#FFC107" name="star" size={20} />
                    <Text> 5,0 (20)</Text>
                </View>
            </View>
            <View>
                <List.Section>
                    <List.Subheader>Serviços Fornecidos</List.Subheader>
                    <List.Item
                        onPress={() => { console.log("Pressed..") }}
                        title="Alimentação"
                        left={() => <List.Icon icon="silverware-fork-knife" />}
                    />
                    <List.Item
                        onPress={() => { console.log("Pressed..") }}
                        title="Banheiro"
                        left={() => <List.Icon icon="toilet" />}
                    />
                </List.Section>
            </View>
            <View>
                <List.Section>
                    <List.Subheader>Comentários</List.Subheader>
                </List.Section>
                <View style={styles.container}>
                    <Card>
                        <Card.Content>
                            <Title>Rodrigo Luíz Costa</Title>
                            <Paragraph>Excelente comida. Bom preço.</Paragraph>
                            <View style={styles.favoritesContainer}>
                                <MaterialIcons color="#FFC107" name="star" size={20} />
                                <MaterialIcons color="#FFC107" name="star" size={20} />
                                <MaterialIcons color="#FFC107" name="star" size={20} />
                                <MaterialIcons color="#FFC107" name="star" size={20} />
                                <MaterialIcons color="#FFC107" name="star" size={20} />
                            </View>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        </>
    );
};

export default PointDetail;