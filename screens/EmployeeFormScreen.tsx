import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const employeeValidationSchema = Yup.object({
    fullName: Yup.string()
        .trim()
        .required("Full name is required")
        .min(2, "Full name must be at least 2 characters"),

    employeeId: Yup.string()
        .trim()
        .required("Employee ID is required")
        .min(3, "Employee ID must be at least 3 characters"),

    email: Yup.string()
        .trim()
        .email("Enter a valid email")
        .required("Email is required"),

    phoneNumber: Yup.string()
        .required("Phone number is required")
        .min(10, "Phone number must be at least 10 digits")
        .matches(/^\d+$/, "Phone number must contain only digits"),

    department: Yup.string()
        .trim()
        .required("Department is required")
        .min(2, "Department must be at least 2 characters"),
});


export default function EmployeeFormScreen() {
    const [focusedField, setFocusedField] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Employee Information Form</Text>

            <Formik
                initialValues={{
                    fullName: "",
                    employeeId: "",
                    email: "",
                    phoneNumber: "",
                    department: "",
                }}
                validationSchema={employeeValidationSchema}
                validateOnMount={true}
                validateOnChange={true}
                validateOnBlur={true}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                    <View style={{ width: "100%" }}>
                        <TextInput
                            style={[
                                styles.input,
                                focusedField === "fullName" && styles.inputFocused,
                                touched.fullName && errors.fullName ? styles.inputError : null,
                                ]}
                            
                            placeholder="Full Name"
                            onFocus={() => setFocusedField("fullName")}
                            onChangeText={handleChange("fullName")}
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
                                focusedField === "employeeId" && styles.inputFocused,
                                touched.employeeId && errors.employeeId ? styles.inputError : null,
                            ]}
                                
                            placeholder="Employee ID"
                            onFocus={() => setFocusedField("employeeId")}
                            onChangeText={handleChange("employeeId")}
                            onBlur={(e) => {
                                handleBlur("employeeId")(e);
                                setFocusedField(null);
                            }}
                            value={values.employeeId}
                        />

                        {touched.employeeId && errors.employeeId && (
                            <Text style={styles.errorText}>{errors.employeeId}</Text>
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
                            onFocus={() => setFocusedField("email")}
                            onChangeText={handleChange("email")}
                            onBlur={(e) => {
                                handleBlur("email")(e);
                                setFocusedField(null);
                            }}
                            value={values.email}
                        />

                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}

                        <TextInput
                            style={[
                                styles.input,
                                focusedField === "phoneNumber" && styles.inputFocused,
                                touched.phoneNumber && errors.phoneNumber ? styles.inputError : null,
                            ]}
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                            onFocus={() => setFocusedField("phoneNumber")}
                            onChangeText={handleChange("phoneNumber")}
                            onBlur={(e) => {
                                handleBlur("phoneNumber")(e);
                                setFocusedField(null);
                            }}
                            value={values.phoneNumber}
                        />

                        {touched.phoneNumber && errors.phoneNumber && (
                            <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                        )}

                        <TextInput
                            style={[
                                styles.input,
                                focusedField === "department" && styles.inputFocused,
                                touched.department && errors.department ? styles.inputError : null,
                            ]}
                            placeholder="Department"
                            onFocus={() => setFocusedField("department")}
                            onChangeText={handleChange("department")}
                            onBlur={(e) => {
                                handleBlur("department")(e);
                                setFocusedField(null);
                            }}
                            value={values.department}
                        />

                        {touched.department && errors.department && (
                            <Text style={styles.errorText}>{errors.department}</Text>
                        )}

                        <Pressable
                            style={[styles.button, !isValid && styles.buttonDisabled]}
                            onPress={() => handleSubmit()}
                            disabled={!isValid}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </Pressable>
                    </View>
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
        width: "100%",
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        marginBottom: 10,
        borderRadius: 10,
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
});