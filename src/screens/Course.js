import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Courses from '../api/course'


const Course = ({ navigation }) => {
    const courseCard = ({ item }) => {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.courseContainer}>

                    <View>
                        <Image
                            style={styles.cardImage}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.mainHeader}>{item.title}</Text>


                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => navigation.navigate("CourseDetails")}>
                            <Text style={styles.buttonText}>Enroll now</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.lineStyle}></View> */}
                    {/* <Text style={styles.mainDescr}>{item.description}</Text> */}

                </View>
            </View>
        );
    };
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={Courses}
            renderItem={courseCard}
        />
    )
}

export default Course

const styles = StyleSheet.create({
    cardImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 10,
        shadowColor: "black",
    },

    mainHeader: {
        textAlign: 'center',
        fontSize: 22,
        marginTop: 15,
        fontWeight: 'bold',
    },

    courseContainer: {
        padding: 15,
        margin: 15
    },

    mainContainer: {
        borderWidth: 2,
        margin: 20,
        borderRadius: 4,
        borderColor: 'grey',
    },

    buttonText: {
        // #f652a0 --> pink
        // #f51720 --> kesari
        backgroundColor: "#4169e1",
        color: "white",
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        padding: 8,
        borderRadius: 4,
    },

    lineStyle: {
        marginTop: 20,
        borderWidth: 1.2,
        borderColor: "black",
    }
})