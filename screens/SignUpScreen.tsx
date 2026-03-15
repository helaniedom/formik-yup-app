import { Formik } from "formik";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

const signUpValidationSchema = Yup.object({
    fullName: Yup.string()
        .trim()
        .min(2, "Full name must be at least 2 characters")
        .required("Full name is required"),
    email: Yup.string()
        .trim()
        .email("Enter a valid email")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
    });

    export default function SignUpScreen({ navigation }: any) {
        const [focusedField, setFocusedField] = useState<string | null>(null);
        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <Formik
            initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            }}
            validationSchema={signUpValidationSchema}
            validateOnMount={true}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values) => {
            console.log("Sign Up Submitted:", values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
            <>
                <TextInput
                style={[
                    styles.input,
                    focusedField === "fullName" && styles.inputFocused,
                    touched.fullName && errors.fullName ? styles.inputError : null,
                ]}
                placeholder="Full Name"
                onChangeText={handleChange("fullName")}
                onFocus={() => setFocusedField("fullName")}
                onBlur={(e) => {
                    handleBlur("fullName")(e);
                    setFocusedField(null);
                }}
                value={values.fullName}
                />
                {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
                )}

                <TextInput
                style={[
                    styles.input,
                    focusedField === "email" && styles.inputFocused,
                    touched.email && errors.email ? styles.inputError : null,
                ]}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onFocus={() => setFocusedField("email")}
                onBlur={(e) => {
                    handleBlur("email")(e);
                    setFocusedField(null);
                }}
                value={values.email}
                />
                {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <View
                    style={[
                        styles.passwordContainer,
                        focusedField === "password" && styles.inputFocused,
                        touched.password && errors.password ? styles.inputError : null,
                    ]}
                >

                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Password"
                        secureTextEntry={!showPassword}
                        onChangeText={handleChange("password")}
                        onFocus={() => setFocusedField("password")}
                        onBlur={(e) => {
                            handleBlur("password")(e);
                            setFocusedField(null);
                        }}
                        value={values.password}
                    />
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Ionicons
                            name={showPassword ? "eye-off-outline" : "eye-outline"}
                            size={22}
                            color="#666"
                        />
                    </Pressable>
                </View>
                
                {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <View 
                    style={[styles.passwordContainer,
                    focusedField === "confirmPassword" && styles.inputFocused,
                    touched.confirmPassword && errors.confirmPassword ? styles.inputError : null,
                    ]}
                >
                    <TextInput
                        style={styles.passwordInput}
                        placeholder="Confirm Password"
                        secureTextEntry={!showConfirmPassword}
                        onChangeText={handleChange("confirmPassword")}
                        onFocus={() => setFocusedField("confirmPassword")}
                        onBlur={(e) => {
                            handleBlur("confirmPassword")(e);
                            setFocusedField(null);
                        }}
                        value={values.confirmPassword}
                    />
                    <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <Ionicons
                            name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                            size={22}
                            color="#666"
                        />
                    </Pressable>
                </View>

                {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}

                <Pressable
                style={[styles.button, !isValid && styles.buttonDisabled]}
                onPress={() => handleSubmit()}
                disabled={!isValid}
                >
                <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.linkText}>Already have an account? Sign In</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("EmployeeForm")}>
                <Text style={styles.linkText}>Go to Employee Form</Text>
                </Pressable>
            </>
            )}
        </Formik>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
    },
    inputFocused: {
        borderColor: "#007AFF",
        borderWidth: 2,
    },
    inputError: {
        borderColor: "red",
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        fontSize: 13,
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 10,
    },
    buttonDisabled: {
        backgroundColor: "#a0cfff",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    linkText: {
        color: "#007AFF",
        textAlign: "center",
        marginTop: 15,
    },
    passwordContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 12,
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        paddingVertical: 12,
    },
});
