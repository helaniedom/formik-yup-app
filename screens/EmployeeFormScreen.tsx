import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const employeeValidationSchema = Yup.object({
    fullName: Yup.string()
        .required("Full name is required")
        .min(2, "Full name must be at least 2 characters"),

    employeeId: Yup.string()
        .required("Employee ID is required")
        .min(3, "Employee ID must be at least 3 characters"),

    email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

    phoneNumber: Yup.string()
        .required("Phone number is required")
        .min(10, "Phone number must be at least 10 digits"),

    department: Yup.string()
        .required("Department is required")
        .min(2, "Department must be at least 2 characters"),
});


export default function EmployeeFormScreen() {
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
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            onChangeText={handleChange("fullName")}
                            onBlur={handleBlur("fullName")}
                            value={values.fullName}
                        />

                        {touched.fullName && errors.fullName && (
                            <Text>{errors.fullName}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Employee ID"
                            onChangeText={handleChange("employeeId")}
                            onBlur={handleBlur("employeeId")}
                            value={values.employeeId}
                        />

                        {touched.employeeId && errors.employeeId && (
                            <Text>{errors.employeeId}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                        />

                        {touched.email && errors.email && (
                            <Text>{errors.email}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            onChangeText={handleChange("phoneNumber")}
                            onBlur={handleBlur("phoneNumber")}
                            value={values.phoneNumber}
                        />

                        {touched.phoneNumber && errors.phoneNumber && (
                            <Text>{errors.phoneNumber}</Text>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="Department"
                            onChangeText={handleChange("department")}
                            onBlur={handleBlur("department")}
                            value={values.department}
                        />

                        {touched.department && errors.department && (
                            <Text>{errors.department}</Text>
                        )}

                        <Pressable style={styles.button} onPress={() => handleSubmit()}>
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
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        marginBottom: 12,
        borderRadius: 6,
    },
    button: {
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
    },
    buttonText: {
        fontWeight: "bold",
    },
});