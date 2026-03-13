import { Text, View } from "react-native";

export default function SignInScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>This screen will hold the sign-in form.</Text>
        </View>
    );
}
