import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Advanced Forms App</Text>
            <Text style={styles.subtitle}>by: Crescia, Helanie, & Paras</Text>
            <Text style={styles.subtitle}>Select a form to continue</Text>

            <Pressable style={styles.button} onPress={() => navigation.navigate("SignIn")}>
                <Ionicons name="log-in-outline" size={20} color="white" />
                <Text style={styles.buttonText}>Go to Sign In</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                <Ionicons name="person-add-outline" size={20} color="white" />
                <Text style={styles.buttonText}>Go to Sign Up</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate("EmployeeForm")}>
                <Ionicons name="document-text-outline" size={20} color="white" />
                <Text style={styles.buttonText}>Go to Employee Form</Text>
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
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#007AFF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 12,
        width: "80%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});