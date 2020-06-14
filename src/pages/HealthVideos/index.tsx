import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { Appbar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import styles from './styles';
import { ScrollView } from "react-native-gesture-handler";

interface HealthVideo {
    name: string;
    watched: boolean;
    uri: string;
}

const HealthVideos = () => {
    const [videos, setVideos] = useState<HealthVideo[]>([]);
    const navigation = useNavigation();

    useEffect(() => {
        setVideos([{
            name: 'Dicas de Exercícios',
            watched: false,
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }, {
            name: 'Palestra sobre saúde',
            watched: true,
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }]);
    }, []);

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Vídeos" />
            </Appbar.Header>

            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Cada visualização de vídeo vale <Text style={styles.boldText}>50 Chapa Pontos</Text>!</Text>

                    {videos.map(video => (
                        <View key={video.name} style={styles.videoContainer}>
                            <View style={styles.cardTitleContent}>
                                <Text style={styles.titleText}>{video.name}</Text>
                                {video.watched && 
                                    <>
                                        <Text style={styles.watched}>
                                            Assistido 
                                        </Text>
                                        <MaterialIcons name="done-all" style={styles.icon} size={12} />
                                    </>
                                }
                            </View>
                            <Video
                                source={{ uri: video.uri }}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode="cover"
                                useNativeControls
                                style={{ height: 200 }}
                            />
                        </View>
                    ))}
                    
                </View>
            </ScrollView>
        </>
    );
};

export default HealthVideos;