import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Appbar, Card, Title, Paragraph, Divider, Button, useTheme } from 'react-native-paper';
import { View, Text } from 'react-native';
import { Reward } from "../../entities/Entities";
import styles from './styles';
import { rewards } from '../../storage';

interface Params {
    reward_id: number;
}

const RewardBuy = () => {
    const [reward, setReward] = useState<Reward>({} as Reward);
    const navigation = useNavigation();
    const route = useRoute();
    const routeParams = route.params as Params;
    const { colors } = useTheme();

    useEffect(() => {
        const id = routeParams.reward_id;
        const rewardFound = rewards.find(r => r.id === id) as Reward;
        setReward(rewardFound);
    }, []);

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { handleNavigateBack() }} />
                <Appbar.Content title="Confirmação de Compra" />
            </Appbar.Header>
            <View style={styles.container}>
                <Text style={styles.title}>Você está comprando</Text>
                <Card>
                    <Card.Cover source={reward.image} />
                    <Card.Content>
                        <Title>{reward.name}</Title>
                        <Paragraph style={styles.paragraph}>{reward.description}</Paragraph>
                        <Divider />
                        <View style={styles.pointsContainer}>
                            <Text>Saldo de Pontos</Text>
                            <Text>2500</Text>
                        </View>
                        <View style={styles.pointsContainer}>
                            <Text>Preço do Produto</Text>
                            <Text>750</Text>
                        </View>
                        <Divider />
                        <View style={styles.pointsContainer}>
                            <Text>Saldo Final</Text>
                            <Text>1750</Text>
                        </View>
                    </Card.Content>
                    <Card.Actions style={styles.actionsContainer}>
                        <Button color={colors.accent} mode="contained" dark={true} onPress={() => { console.log("Compra!") }}>COMPRAR</Button>
                    </Card.Actions>
                </Card>
            </View>
        </>
    );
};

export default RewardBuy;