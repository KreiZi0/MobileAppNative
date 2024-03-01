import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import { styles } from "./styles";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import axios from 'axios';
import { AsyncStorage } from 'react-native'; // Import AsyncStorage
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../../../../App";

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({ fullName: '', email: '', password: '' });
    const { setUser } = useContext(UserContext); // Import setUser from UserContext

    const onBack = () => {
        navigation.goBack();
    };

    const onChange = (key, value) => {
        setValues(prevValues => ({ ...prevValues, [key]: value }));
    };

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    const onSubmit = async () => {
        if (!values.fullName || !values.email || !values.password) {
            Alert.alert('All fields are required');
            return;
        }

        if (!checked) {
            Alert.alert('Please agree with terms');
            return;
        }

        try {
            const response = await axios.post('http://192.168.17.234/api/user/register', values);
            console.log('signup => ', response.data);
            const { email, password } = values;
            const loginResponse = await axios.post('http://192.168.17.234/api/user/login', { email, password });
            console.log('login =>', loginResponse.data);
            const accessToken = loginResponse?.data?.accessToken;
            console.log(accessToken);
            setUser({ accessToken });
            if (loginResponse?.data?.token) {
                await AsyncStorage.setItem('auth_token', `${loginResponse.data.token}`);
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Error occurred. Please try again later.');
        }
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign Up" />
                <Input
                    value={values.fullName}
                    onChangeText={text => onChange('fullName', text)}
                    label="Name"
                    placeholder="John Doe"
                />
                <Input
                    value={values.email}
                    onChangeText={text => onChange('email', text)}
                    label="Email"
                    placeholder="example@gmail.com"
                />
                <Input
                    value={values.password}
                    onChangeText={text => onChange('password', text)}
                    isPassword
                    label="Password"
                    placeholder="*****"
                />
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>
                        I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text>
                    </Text>
                </View>
                <Button
                    onPress={onSubmit}
                    style={styles.button}
                    title="Sign Up"
                />
                <Separator text="Or sign up with" />
                <GoogleLogin />
                <Text style={styles.footerText}>
                    Already have an account?{' '}
                    <Text style={styles.footerLink} onPress={onSignin}>Sign In</Text>
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
