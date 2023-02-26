import { StyleSheet, Text, View, Image } from 'react-native'
import Menu from '../component/Menu';

const Home = () => {
  const description = "On this platform you will be able to find very affordable courses which are helpful in building your technical skills 👩‍💻😎 so enroll as soon as possible !!";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/newimg.png")}
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text style={[styles.mainHeader1, {
          fontSize: 33,
          color: "#2E2EFF",
          marginTop: 0,
        },
        ]}>
          Kiran ke Classes</Text>

        <Text style={styles.paraStyle}>{description}</Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, {
          marginVertical: 20,
        }]}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },

  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 95,
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,

  },

  mainHeader: {
    fontSize: 30,
    marginTop: 20,
    color: "#344055",
    textTransform: "uppercase",
  },
  mainHeader1: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
    color: "#8F00FF",
    textTransform: "uppercase",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 25,
    paddingBottom: 50,
    lineHeight: 28
  },
  lineStyle: {
    marginBottom: 8,
    marginTop: 12,
    marginVertical: 2,
    marginHorizontal: 8,
    borderWidth: 1.2,
    borderColor: "grey",
  }
});

export default Home
