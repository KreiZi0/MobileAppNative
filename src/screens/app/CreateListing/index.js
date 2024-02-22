import React from "react";
import {View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/Header";
import {styles} from "./styles";

const CreateListing = ({navigation}) => {
    const goBack = () => {
        navigation.goBack()
    }

    return(
        <SafeAreaView style={{flex: 1}}>
            <Header showBack={true} onBackPress={goBack} title="Create a new listing"></Header>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Upload photos</Text>
            </View>
        </SafeAreaView>
    )
}

export default CreateListing