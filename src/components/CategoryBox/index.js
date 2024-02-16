import React from "react";
import { Pressable, Image, Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

const CategoryBox = ({ title, image, onPress, isSelected }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={[styles.imageContainer, isSelected ? styles.selectedContainer : null]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title, isSelected ? {color: colors.blue, fontWeight: '500'} : null]}>{title}</Text>
        </Pressable>
    );
};

export default React.memo(CategoryBox);
