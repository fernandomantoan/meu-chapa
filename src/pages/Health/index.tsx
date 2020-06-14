import React, { useState, useEffect } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from "react-native";
import { Card, Button, List, Appbar, Divider, useTheme } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import { ScrollView } from "react-native-gesture-handler";

interface Challange {
    name: string;
    goal: number;
    actual: number;
}

interface Activity {
    name: string;
    date: Date;
    points: number;
}

const Health = () => {
    const [challanges, setChallanges] = useState<Challange[]>([]);
    const [activities, setActivities] = useState<Activity[]>([]);
    const { colors } = useTheme();
    const navigation = useNavigation();

    useEffect(() => {
        setChallanges([{
            name: 'Passos no dia',
            goal: 5000,
            actual: 0,
        }, {
            name: 'Alongamento',
            goal: 1,
            actual: 0,
        }]);

        setActivities([{
            name: 'Passos no dia',
            date: new Date(),
            points: 50,
        }, {
            name: 'Alongamento',
            date: new Date(),
            points: 50,
        }])
    }, []);

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Minha Saúde" />
            </Appbar.Header>

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Cada objetivo diário vale <Text style={styles.boldText}>50 Chapa Pontos</Text>!</Text>
                    <Text style={styles.subtitle}>Complete suas metas todos os dias!</Text>

                    {challanges.map((challange => (
                        <Card style={styles.card} key={challange.name}>
                            <Card.Content>
                                <View style={styles.cardTitleContent}>
                                    <MaterialIcons name="directions-walk" style={styles.icon} size={32} />
                                    <Text style={styles.titleText}>{challange.name}</Text>
                                </View>
                                <View style={styles.progress}>
                                    <View style={styles.actualProgress}>
                                        <Text style={styles.progressTitle}>Atual</Text>
                                        <Text style={styles.progressActualValue}>{challange.actual}</Text>
                                    </View>
                                    <View style={styles.divider} />
                                    <View style={styles.actualProgress}>
                                        <Text style={styles.progressTitle}>Meta</Text>
                                        <Text style={styles.progressGoalValue}>{challange.goal}</Text>
                                    </View>
                                    <Button icon="play"
                                        mode="contained"
                                        dark={true}
                                        color={colors.accent}
                                        onPress={() => console.log('Pressed')}>
                                        INICIAR
                                    </Button>
                                </View>
                            </Card.Content>
                        </Card>
                    )))}

                    <List.Section>
                        <List.Subheader>Atividades recentes</List.Subheader>
                        {activities.map((activity => (
                            <View key={activity.name}>
                                <List.Item
                                    title={activity.name}
                                    description={activity.date.toLocaleString()}
                                    right={() => <Text style={styles.listItemPoints}>{activity.points} Chapa Pontos</Text>}
                                />
                                <Divider />
                            </View>
                        )))}
                    </List.Section>
                </View>
            </ScrollView>
        </>
    );
};

export default Health;