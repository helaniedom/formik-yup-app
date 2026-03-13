import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Formik } from "formik";

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
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            onChangeText={handleChange("fullName")}
                            onBlur={handleBlur("fullName")}
                            value={values.fullName}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Employee ID"
                            onChangeText={handleChange("employeeId")}
                            onBlur={handleBlur("employeeId")}
                            value={values.employeeId}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number"
                            onChangeText={handleChange("phoneNumber")}
                            onBlur={handleBlur("phoneNumber")}
                            value={values.phoneNumber}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Department"
                            onChangeText={handleChange("department")}
                            onBlur={handleBlur("department")}
                            value={values.department}
                        />

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