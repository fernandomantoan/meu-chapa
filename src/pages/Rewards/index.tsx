import React, { useState } from "react";
import { View, Text, ScrollView, ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar, TextInput, Card, Button, useTheme } from 'react-native-paper';

import { rewards } from '../../storage';
import styles from "./styles";

const Rewards = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [search, setSearch] = useState("");

    function handleNavigateToDetail(id: number) {
        navigation.navigate("RewardBuy", { reward_id: id });
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Telefones Úteis" />
            </Appbar.Header>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Antônio, você possui 2500 Chapa Pontos</Text>
                    <TextInput
                        mode="outlined"
                        label='Buscar'
                        value={search}
                        style={styles.input}
                        onChangeText={text => setSearch(text)}
                    />

                    <View style={styles.gridList}>
                        {rewards.map(reward => (
                            <Card key={reward.id} style={styles.card}>
                                <Card.Cover source={reward.image as ImageSourcePropType} />
                                <Card.Content style={styles.cardContent}>
                                    <Text style={styles.rewardTitle}>{reward.name}</Text>
                                    <Text style={styles.rewardPoints}>{reward.points} Chapa Pontos</Text>
                                    <Text style={styles.rewardDescription}>{reward.description}</Text>
                                </Card.Content>
                                <View style={styles.cardActions}>
                                    <Button 
                                        mode="contained"
                                        dark={true}
                                        color={colors.accent}
                                        onPress={() => { handleNavigateToDetail(reward.id) }}>COMPRAR</Button>
                                </View>
                            </Card>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Rewards;