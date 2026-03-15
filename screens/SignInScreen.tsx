import { Formik } from "formik";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

const signInValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignInScreen({ navigation }: any) {
  const [focusedField, setFocusedField] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Ionicons name="log-in-outline" size={30} color="#007AFF" />
        </View>

        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>
          Welcome back. Sign in to continue using the app.
        </Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={signInValidationSchema}
          validateOnMount={true}
          onSubmit={(values) => {
            console.log("Sign In Submitted:", values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.inputWrapper}>
                <Ionicons name="mail-outline" size={20} color="#007AFF" style={styles.inputIcon} />
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "email" && styles.inputFocused,
                    touched.email && errors.email ? styles.inputError : null,
                  ]}
                  placeholder="Email"
                  placeholderTextColor="#8a8a8a"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={handleChange("email")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => {
                    handleBlur("email");
                    setFocusedField("");
                  }}
                  value={values.email}
                />
              </View>
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={20} color="#007AFF" style={styles.inputIcon} />
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "password" && styles.inputFocused,
                    touched.password && errors.password ? styles.inputError : null,
                  ]}
                  placeholder="Password"
                  placeholderTextColor="#8a8a8a"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => {
                    handleBlur("password");
                    setFocusedField("");
                  }}
                  value={values.password}
                />
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <Pressable
                style={({ pressed }) => [
                  styles.button,
                  !isValid && styles.buttonDisabled,
                  pressed && isValid && styles.buttonPressed,
                ]}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Sign In</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </Pressable>

              <Pressable
                style={styles.linkRow}
                onPress={() => navigation.navigate("SignUp")}
              >
                <Text style={styles.linkText}>Don’t have an account? Sign Up</Text>
              </Pressable>
            </>
          )}
        </Formik>
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
  card: {
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingVertical: 28,
    paddingHorizontal: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#eaf3ff",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
    paddingHorizontal: 6,
  },
  inputWrapper: {
    position: "relative",
    marginBottom: 8,
  },
  inputIcon: {
    position: "absolute",
    left: 14,
    top: 15,
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d9e2ef",
    borderRadius: 16,
    backgroundColor: "#f9fbff",
    paddingVertical: 14,
    paddingLeft: 46,
    paddingRight: 14,
    fontSize: 15,
    color: "#111",
  },
  inputFocused: {
    borderColor: "#007AFF",
    backgroundColor: "#fff",
  },
  inputError: {
    borderColor: "#e53935",
    backgroundColor: "#fff5f5",
  },
  errorText: {
    color: "#e53935",
    fontSize: 13,
    marginBottom: 12,
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 16,
    paddingVertical: 15,
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    shadowColor: "#007AFF",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  buttonDisabled: {
    backgroundColor: "#9ec9ff",
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  linkRow: {
    marginTop: 18,
    alignItems: "center",
  },
  linkText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
  },
});