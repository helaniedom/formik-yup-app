import { View, Text, StyleSheet, Pressable } from "react-native";

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Advanced Forms App</Text>
            <Text style={styles.subtitle}>Project setup is working.</Text>

            <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text>Go to Sign In</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text>Go to Sign Up</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("EmployeeForm")}>
                <Text>Go to Employee Form</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
    },
});