import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import Course from './src/screens/Course';
import CourseDetails from './src/screens/CourseDetails';


export default function App() {
  const Stack = createNativeStackNavigator();

  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name="Home"
        options={{ headerShown: false, }}
        component={Home} />

      <Stack.Screen name="Course"
        options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: "center",
          headerTitle: "Courses"
        }} component={Course} />

      <Stack.Screen name="About"
        options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: "center",
          headerTitle: "About Us"
        }} component={About} />

      <Stack.Screen name="CourseDetails"
        options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: "center",
          headerTitle: "Course Details"
        }} component={CourseDetails} />

      <Stack.Screen name="Contact"
        options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: "center",
          headerTitle: "Contact Us"
        }} component={Contact} />

      <Stack.Screen name="UserData"
        options={{
          headerTitleStyle: {
            fontSize: 25,
          },
          headerTitleAlign: "center",
          headerTitle: "Students Data"
        }} component={UserData} />
    </Stack.Navigator>
  </NavigationContainer>
}
