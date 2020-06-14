import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Appbar, TextInput, Card, Title, Paragraph, Button } from 'react-native-paper';

import { rewards } from '../../storage';
import styles from "./styles";

const Rewards = () => {
    const navigation = useNavigation();
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
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Content>
                                <Title>{reward.name}</Title>
                                <Paragraph>{reward.description}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => { handleNavigateToDetail(reward.id) }}>COMPRAR</Button>
                            </Card.Actions>
                        </Card>
                    ))}
                </View>
            </View>
        </>
    );
};

export default Rewards;