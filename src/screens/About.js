import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
    return (
        <View style={styles.mainContainer}>
            <View >
                <Text style={styles.mainHeader}>Mr. Kiran Shinde</Text>
                <Text style={styles.mainHeader1}>I'm a React-Native Developer 😄</Text>

                <Image
                    style={styles.cardImage}
                    source={require("../../assets/kiruu2.png")}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.aboutContainer}>
                <Text style={styles.aboutHeader}>About Me...</Text>
                <Text style={styles.aboutMe}>
                    I'm 3rd Year CSE student and I have knowledge of full-stack web development and react native development. I am also familiar with other technologies such as C, C++, etc.
                </Text>
            </View>

            <View>
                <Text style={styles.mediaText}>Follow Me On Social Network 👇</Text>
            </View>

            <View style={styles.imageContainer}>
                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL("https://www.linkedin.com/in/kiran-shinde-sde1/")
                    }>
                    <Image
                        style={styles.logoImage}
                        source={{
                            uri: "https://img.icons8.com/color/512/linkedin-circled.png",
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL("https://twitter.com/Kiran_1686")
                    }>
                    <Image
                        style={styles.logoImage}
                        source={{
                            uri: "https://img.icons8.com/color/512/twitter.png",
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        Linking.openURL("https://www.linkedin.com/in/kiran-shinde-sde1/")
                    }>
                    <Image
                        style={styles.logoImage}
                        source={{
                            uri: "https://img.icons8.com/fluency/512/instagram-new.png",
                        }}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default About

const styles = StyleSheet.create({

    mainContainer: {
        backgroundColor: 'white',
        height: '100%'
    },

    mainHeader: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    },
    mainHeader1: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'normal',
        marginTop: 15
    },

    cardImage: {
        width: '85%',
        height: 180,
        marginTop: 30,
        marginLeft: 33,
    },

    aboutContainer: {
        backgroundColor: '#4c5dab',
        marginTop: 32,
        padding: 18
    },

    aboutMe: {
        color: 'white',
        fontSize: 18,
        padding: 10,
        lineHeight: 27,
    },

    aboutHeader: {
        textAlign: 'center',
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    },

    logoImage: {
        width: "100%",
        height: 75,
        aspectRatio: 1,
    },

    imageContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    mediaText: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 50,
    }
})