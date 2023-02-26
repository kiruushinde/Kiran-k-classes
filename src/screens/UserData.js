import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Students from '../api/student'

const UserData = () => {
    const studentCard = ({ item }) => {
        return (

            <View style={styles.mainContainer}>
                <View style={styles.studentContainer}>

                    <View>
                        <Image
                            style={styles.cardImage}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.courseDetails}>

                        <Text style={styles.courseTitle}>Course enrolled 👉 {item.title}</Text>

                        <View style={styles.lineStyle}></View>

                        <Text style={styles.courseTitle}>Name : {item.name}</Text>

                        <View style={styles.lineStyle}></View>

                        <Text style={styles.courseTitle}>Course 1 : {item.course1}</Text>

                        <View style={styles.lineStyle}></View>

                        <Text style={styles.courseTitle}>Total Price : {item.price}</Text>

                    </View>
                </View>
            </View>
        )
    };

    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={Students}
            renderItem={studentCard}
        />
    )
}

export default UserData

const styles = StyleSheet.create({

    mainContainer: {
        borderColor: 'black',
        borderWidth: 2,
        margin: 25,
        borderRadius: 5,
        backgroundColor: '#c0c2c9',
    },

    textStyle: {
        color: 'black',
    },

    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10,
        shadowColor: "black"
    },

    lineStyle: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 8,
    },

    studentContainer: {
        padding: 20,
    },

    courseDetails: {
        marginTop: 20,
    },
    courseTitle: {
        fontSize: 18,
        textAlign: 'center',
    }
})