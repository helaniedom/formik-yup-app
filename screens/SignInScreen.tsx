import { Formik } from "formik";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import * as Yup from "yup";

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
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={signInValidationSchema}
                validateOnMount={true}
                onSubmit={(values) => {
                console.log("Sign In Submitted:", values);
                }}
                >
                {({
                handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, }) => (
                <>
                    <TextInput style={[
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
                    style={[ styles.input, touched.password && errors.password ? styles.inputError : null,
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

                    <Pressable
                    style={[styles.button, !isValid && styles.buttonDisabled]}
                    onPress={() => handleSubmit()}
                    disabled={!isValid}
                    >
                    <Text style={styles.buttonText}>Sign In</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.linkText}>Don’t have an account? Sign Up</Text>
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
        justifyContent: "center", backgroundColor: "#fff",
    },
    title: {
        fontSize: 28, fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
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
        fontWeight: "bold", fontSize: 16,
    },
    linkText: {
        color: "#007AFF",
        textAlign: "center",
        marginTop: 15,
    },
});