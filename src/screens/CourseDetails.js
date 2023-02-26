import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CourseDetails = () => {
    return (
        <View style={styles.mainContainer}>
            <Image
                style={styles.headerImage}
                resizeMode="contain"
                source={require("../../assets/enroll.jpg")}
            />
            <Text style={styles.mainHeader}>You are successfully enrolled to the course 🥳🙌</Text>
        </View>
    );
};

export default CourseDetails

const styles = StyleSheet.create({
    mainHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    headerImage: {
        width: '100%',
        height: '80%',
        borderRadius: 4
    },
    mainContainer: {
        margin: 20,
        padding: 20,
    }
})