import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Freight from "./pages/Freight";
import Health from "./pages/Health";
import HealthVideos from "./pages/HealthVideos";
import Phones from "./pages/Phones";
import PointDetail from "./pages/PointDetail";
import PointsMap from "./pages/PointsMap";
import RewardBuy from "./pages/RewardBuy";
import Rewards from "./pages/Rewards";

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "#f0f0f5",
                    },
                }}
            >
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Freight" component={Freight} />
                <AppStack.Screen name="Health" component={Health} />
                <AppStack.Screen name="HealthVideos" component={HealthVideos} />
                <AppStack.Screen name="Phones" component={Phones} />
                <AppStack.Screen name="PointDetail" component={PointDetail} />
                <AppStack.Screen name="PointsMap" component={PointsMap} />
                <AppStack.Screen name="RewardBuy" component={RewardBuy} />
                <AppStack.Screen name="Rewards" component={Rewards} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;