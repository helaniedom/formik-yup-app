import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Ionicons } from "@expo/vector-icons";

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
  const [focusedField, setFocusedField] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.iconCircle}>
          <Ionicons name="document-text-outline" size={30} color="#007AFF" />
        </View>

        <Text style={styles.title}>Employee Form</Text>
        <Text style={styles.subtitle}>
          Enter employee information.
        </Text>

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
          onSubmit={(values) => {
            console.log("Employee Form Submitted:", values);
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
                <Ionicons name="person-outline" size={20} color="#007AFF" style={styles.inputIcon} />
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "fullName" && styles.inputFocused,
                    touched.fullName && errors.fullName ? styles.inputError : null,
                  ]}
                  placeholder="Full Name"
                  placeholderTextColor="#8a8a8a"
                  onChangeText={handleChange("fullName")}
                  onFocus={() => setFocusedField("fullName")}
                  onBlur={() => {
                    handleBlur("fullName");
                    setFocusedField("");
                  }}
                  value={values.fullName}
                />
              </View>
              {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}

              <View style={styles.inputWrapper}>
                <Ionicons name="card-outline" size={20} color="#007AFF" style={styles.inputIcon} />
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "employeeId" && styles.inputFocused,
                    touched.employeeId && errors.employeeId ? styles.inputError : null,
                  ]}
                  placeholder="Employee ID"
                  placeholderTextColor="#8a8a8a"
                  onChangeText={handleChange("employeeId")}
                  onFocus={() => setFocusedField("employeeId")}
                  onBlur={() => {
                    handleBlur("employeeId");
                    setFocusedField("");
                  }}
                  value={values.employeeId}
                />
              </View>
              {touched.employeeId && errors.employeeId && (
                <Text style={styles.errorText}>{errors.employeeId}</Text>
              )}

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
                <Ionicons name="call-outline" size={20} color="#007AFF" style={styles.inputIcon} />
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "phoneNumber" && styles.inputFocused,
                    touched.phoneNumber && errors.phoneNumber ? styles.inputError : null,
                  ]}
                  placeholder="Phone Number"
                  placeholderTextColor="#8a8a8a"
                  keyboardType="phone-pad"
                  onChangeText={handleChange("phoneNumber")}
                  onFocus={() => setFocusedField("phoneNumber")}
                  onBlur={() => {
                    handleBlur("phoneNumber");
                    setFocusedField("");
                  }}
                  value={values.phoneNumber}
                />
              </View>
              {touched.phoneNumber && errors.phoneNumber && (
                <Text style={styles.errorText}>{errors.phoneNumber}</Text>
              )}

              <View style={styles.inputWrapper}>
                <Ionicons name="business-outline" size={20} color="#007AFF" style={styles.inputIcon} />
                <TextInput
                  style={[
                    styles.input,
                    focusedField === "department" && styles.inputFocused,
                    touched.department && errors.department ? styles.inputError : null,
                  ]}
                  placeholder="Department"
                  placeholderTextColor="#8a8a8a"
                  onChangeText={handleChange("department")}
                  onFocus={() => setFocusedField("department")}
                  onBlur={() => {
                    handleBlur("department");
                    setFocusedField("");
                  }}
                  value={values.department}
                />
              </View>
              {touched.department && errors.department && (
                <Text style={styles.errorText}>{errors.department}</Text>
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
                <Text style={styles.buttonText}>Submit Form</Text>
                <Ionicons name="arrow-forward" size={18} color="#fff" />
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
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
});