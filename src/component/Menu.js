import { useNavigation } from "@react-navigation/native";
import React from "react";

import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

const Menu = () => {

    const navigation = useNavigation();
    return <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Course")}>
            {/* <Text style={styles.textStyle}>Course</Text> */}
            <Image
                style={styles.iconStyle}
                source={{ uri: "https://img.icons8.com/clouds/512/classroom.png", }}
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("UserData")}>
            {/* <Text style={styles.textStyle}>Student</Text> */}
            <Image
                style={styles.iconStyle2}
                source={{ uri: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-students-literature-flaticons-lineal-color-flat-icons-3.png", }}
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("About")}>
            {/* <Text style={styles.textStyle}>About</Text> */}
            <Image
                style={styles.iconStyle3}
                source={{ uri: "https://img.icons8.com/bubbles/512/info.png", }}
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonStyle}
            onPress={() => navigation.navigate("Contact")}>
            {/* <Text style={styles.textStyle}>Contact</Text> */}
            <Image
                style={styles.iconStyle4}
                source={{ uri: "https://img.icons8.com/clouds/512/contact-card.png", }}
            />
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({

    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    textStyle: {
        // fontSize: 15,
        textTransform: "uppercase"
    },
    iconStyle: {
        width: "100%",
        height: 63,
        aspectRatio: 1,
    },
    iconStyle2: {
        width: "100%",
        height: 52,
        aspectRatio: 1,
    },
    iconStyle4: {
        width: "100%",
        height: 60,
        aspectRatio: 1,
    },
    iconStyle3: {
        width: "100%",
        height: 60,
        aspectRatio: 1,
    },

});
export default Menu;