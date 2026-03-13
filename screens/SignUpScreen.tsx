import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";

const signUpValidationSchema = Yup.object({
    fullName: Yup.string()
        .min(2, "Full name must be at least 2 characters")
        .required("Full name is required"),
    email: Yup.string()
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
            onSubmit={(values) => {
            console.log("Sign Up Submitted:", values);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
            <>
                <TextInput
                style={[
                    styles.input,
                    touched.fullName && errors.fullName ? styles.inputError : null,
                ]}
                placeholder="Full Name"
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
                />
                {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
                )}

                <TextInput
                style={[
                    styles.input,
                    touched.email && errors.email ? styles.inputError : null,
                ]}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                />
                {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
                )}

                <TextInput
                style={[
                    styles.input,
                    touched.password && errors.password ? styles.inputError : null,
                ]}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                />
                {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <TextInput
                style={[
                    styles.input,
                    touched.confirmPassword && errors.confirmPassword ? styles.inputError : null, ]}
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                />
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
        fontSize: 28, fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1, borderColor: "#ccc", borderRadius: 10,
        padding: 12,
        marginBottom: 10, backgroundColor: "#f9f9f9",
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
});
