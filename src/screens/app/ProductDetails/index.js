import React from "react";
import { ScrollView, Image, Text, View, Pressable, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Button from "../../../components/Button";
import ImageCarusel from "../../../components/ImageCarousel";

const ProductDetails = ({ navigation, route }) => {
    const { product } = route.params || {};

    const onBackPress = () => {
        navigation.goBack()
    }

    const onContact = () => {
        let phone = 'real phone number'
        Linking.openURL(`tel:${phone}`)

        let email='real email'
        Linking.openURL(`mailto:${email}`)
    }

    return (
        <SafeAreaView style={styles.save}>
            <ScrollView>
            {product?.images?.length ? (
                <ImageCarusel images={product?.images}></ImageCarusel>
                ) : (
                <Image style={styles.image} source={{ uri: product?.image }} />
            )}
                <View style={styles.content}>
                    <Text style={styles.title}>{product?.title}</Text>
                    <Text style={styles.price}>{product?.price}</Text>
                    <Text style={styles.description}>{product?.description}</Text>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')}></Image>
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable
                  onPress={() => {
                      // Here you can add the functionality you want to trigger on press
                      console.log('Bookmark pressed');
                  }}
                  style={({ pressed }) => [
                      styles.bookmarkContainer,
                      pressed && { opacity: 0.5 } // This adds an opacity change for visual feedback when pressed
                  ]}
                >
                    <Image 
                      style={styles.bookmarkIcon} 
                      source={require('../../../assets/tabs/bookmark_active.png')} 
                    />
                </Pressable>
                <Button onPress={onContact} style='button' title="Contact Seller" />
            </View>
        </SafeAreaView>
    );
};

export default ProductDetails;
