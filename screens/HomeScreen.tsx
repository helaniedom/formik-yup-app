import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.heroCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="clipboard-outline" size={34} color="#007AFF" />
        </View>

        <Text style={styles.title}>Advanced Forms App</Text>
        <Text style={styles.subtitle}>by Crescia, Helanie, & Paras</Text>

        <Text style={styles.description}>
          Choose a form below
        </Text>
      </View>

      <View style={styles.buttonContainer}>

        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <View style={styles.buttonLeft}>
            <View style={styles.smallIconCircle}>
              <Ionicons name="log-in-outline" size={20} color="#007AFF" />
            </View>

            <View>
              <Text style={styles.navButtonTitle}>Sign In</Text>
              <Text style={styles.navButtonSubtitle}>Access existing account</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#888" />
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <View style={styles.buttonLeft}>
            <View style={styles.smallIconCircle}>
              <Ionicons name="person-add-outline" size={20} color="#007AFF" />
            </View>

            <View>
              <Text style={styles.navButtonTitle}>Sign Up</Text>
              <Text style={styles.navButtonSubtitle}>Create new account</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#888" />
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => navigation.navigate("EmployeeForm")}
        >
          <View style={styles.buttonLeft}>
            <View style={styles.smallIconCircle}>
              <Ionicons name="document-text-outline" size={20} color="#007AFF" />
            </View>

            <View>
              <Text style={styles.navButtonTitle}>Employee Form</Text>
              <Text style={styles.navButtonSubtitle}>Enter employee details</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={22} color="#888" />
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  heroCard: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 22,
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  iconCircle: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#eaf3ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#007AFF",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },

  description: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 8,
  },

  buttonContainer: {
    gap: 14,
  },

  navButton: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },

  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.98 }],
  },

  buttonLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  smallIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#eef5ff",
    justifyContent: "center",
    alignItems: "center",
  },

  navButtonTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
    marginBottom: 2,
  },

  navButtonSubtitle: {
    fontSize: 13,
    color: "#666",
  },
});