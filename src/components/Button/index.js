import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { styles as buttonStyles } from "./styles";

const Button = ({ title, onPress, style }) => {
    const handlePress = () => {
        console.log('Button is clicked')
    }
    return (
        <Pressable onPress={handlePress} style={[buttonStyles.container, styles.button, style]}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    button: {
        // Additional button styles
    },
    text: {
        // Additional text styles
    }
});

export default Button;
