import {
    StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,
} from "react-native";

import React, { useState } from "react";

const Contact = ({ navigation }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);

    const submit = () => {
        if (!name && !email && !phone && !message) {
            Alert.alert("Plzz fill all the fields");
        } else {
            Alert.alert(`Thank You ${name}`);
            navigation.navigate("Home");
        }
    };

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Level up your knowledge </Text>

            <Text style={styles.description}>
                You can reach us anytime via kiranshinde1686@gmail.com
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your name </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"Kiran Shinde"}
                    value={name}
                    onChangeText={(userdata) => setName(userdata)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your Email </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"kiran@shinde.com"}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Enter your mobile </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder={"+91 9991112223"}
                    value={phone}
                    onChangeText={(phone) => setPhone(phone)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> How can we help you? </Text>
                <TextInput
                    style={[styles.inputStyle, styles.multilineStyle]}
                    placeholder={"Tell us about your self"}
                    value={message}
                    onChangeText={(msg) => setMessage(msg)}
                    numberOfLines={5}
                    multiline={true}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.labels}> Feedback (*if any) </Text>
                <TextInput
                    style={[styles.inputStyle, styles.multilineStyle]}
                    placeholder={"Your suggestions !!"}
                    numberOfLines={5}
                    multiline={true}
                />
            </View>

            {/* submit button  */}

            <TouchableOpacity
                style={[
                    styles.buttonStyle,
                    {
                        backgroundColor: agree ? "#4630EB" : "#4169e1",
                    },
                ]}
                // disabled={!agree}
                onPress={submit}>
                <Text style={styles.buttonText}> Contact Us </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    mainHeader: {
        fontSize: 24,
        color: "#344055",
        fontWeight: "500",
        paddingTop: 20,
        paddingBottom: 15,
        textTransform: "capitalize",
    },
    description: {
        fontSize: 18,
        color: "#7d7d7d",
        paddingBottom: 20,
        lineHeight: 25,
    },

    inputContainer: {
        marginTop: 20,
    },
    labels: {
        // fontWeight: "bold",
        fontSize: 16,
        color: "black",
        paddingBottom: 5,
        lineHeight: 25,
    },
    inputStyle: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 4,
    },
    multiineStyle: {
        paddingVertical: 4,
    },
    buttonStyle: {
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    wrapper: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
    },
    wrapperText: {
        marginLeft: 10,
        color: "#7d7d7d",
    },
});

export default Contact;
