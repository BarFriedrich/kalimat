import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import House from "../icons/House";
import { useNavigation } from '@react-navigation/native';
import { DURATION, ICON_SIZE, PADDING, SEGMENT } from "../icons/Constants";
import Tab from './Tab';
import Book from "../icons/Book";
import Rank from "../icons/Rank";
import Profile from "../icons/Profile";

const tabs = [
    {
        icon: <House />,
        screen: 'Home'
    },
    {
        icon: <Book />,
        screen: 'Test'
    },
    {
        icon: <Rank />,
        screen: 'Test'
    },
    {
        icon: <Profile />,
        screen: 'Test'
    }
];

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    tabs: {
        flexDirection: "row",
        alignItems: "center",
    },
    tab: {
        width: SEGMENT,
        height: ICON_SIZE + PADDING * 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default (props) => {
    const [active, setActive] = useState(props.initial);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                {tabs.map(({ icon, screen }, index) => (
                    <View key={index} style={styles.tab}>
                        <Tab
                            onPress={() => {
                                setActive(index)
                                navigation.navigate(screen)
                            }}
                            {...{ active, index }}
                        >
                            {icon}
                        </Tab>
                    </View>
                ))}
            </View>
        </View>
    );
};