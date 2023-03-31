import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
} from "react-native";
import Btn from "../../components/Btn";
import { darkGreen } from "../../components/Constants";
import Field from "../../components/Field";
import { Ionicons } from "@expo/vector-icons";
import CheckBox from "react-native-checkbox";
import SelectDropdown from "react-native-select-dropdown";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { onUserSignUp } from "../../helpers/auth";

const TermsAndConditions = () => {
  return (
    <View style={styles.modalContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        <Text style={styles.modalTextHeader}>Terms and Conditions</Text>
        <Text style={styles.modalText}>
          {" "}
          1. Introduction This document constitutes a legally binding agreement
          between you and ZoneIn, governing your use of the ZoneIn app and its
          services. By using the ZoneIn app, you agree to be bound by these
          terms and conditions. If you do not agree to these terms and
          conditions, you must immediately stop using the ZoneIn app.
          Eligibility The ZoneIn app is intended for use by individuals who are
          at least 18 years of age.{" "}
        </Text>
        <Text style={styles.modalText}>
          2. If you are under 18 years of age, you may use the ZoneIn app only
          with the supervision of a parent or legal guardian who agrees to be
          bound by these terms and conditions. Services The ZoneIn app provides
          a platform for users to assess themselves and their children for ADHD,
          manage treatment options such as therapy, and access advice from
          medical professionals. The ZoneIn app does not provide medical advice
          or diagnosis.{" "}
        </Text>
        <Text style={styles.modalText}>
          3. The information and services provided through the ZoneIn app are
          for informational purposes only and should not be used as a substitute
          for professional medical advice, diagnosis, or treatment. User
          Accounts In order to access the services provided by the ZoneIn app,
          you must create an account. You agree to provide accurate and complete
          information when creating your account and to keep this information
          up-to-date. You are responsible for maintaining the confidentiality of
          your account and password and for restricting access to your device.
          You agree to accept responsibility for all activities that occur under
          your account or password.{" "}
        </Text>
        <Text style={styles.modalText}>
          4. User Content The ZoneIn app may allow you to submit, upload,
          publish, or otherwise make available content, including but not
          limited to text, photographs, and videos (“User Content”). You retain
          all rights in your User Content and are responsible for ensuring that
          your User Content does not violate the intellectual property rights of
          any third party. By making any User Content available through the
          ZoneIn app, you grant to ZoneIn a non-exclusive, transferable,
          sub-licensable, royalty-free, worldwide license to use, copy, modify,
          create derivative works based on, distribute, publicly display,
          publicly perform, and otherwise exploit your User Content in
          connection with the ZoneIn app and ZoneIn's business. Proprietary
          Rights The ZoneIn app and its content, including but not limited to
          software, text, graphics, and logos, are the proprietary property of
          ZoneIn and its licensors and are protected by intellectual property
          laws.{" "}
        </Text>
        <Text style={styles.modalText}>
          5. You may not use the ZoneIn app or its content for any commercial
          purpose without the express written consent of ZoneIn. Disclaimer of
          Warranties The ZoneIn app and its content are provided on an “as is”
          and “as available” basis. [App Name] makes no representations or
          warranties of any kind, express or implied, as to the operation of the
          ZoneIn app or the accuracy, completeness, or reliability of its
          content. You expressly agree that your use of the ZoneIn app is at
          your sole risk. Limitation of Liability In no event shall ZoneIn be
          liable for any damages of any kind arising from the use of the ZoneIn
          app, including but not limited to direct, indirect, incidental,
          punitive, and consequential damages. Indemnification You agree to
          indemnify and hold ZoneIn and its officers, directors, employees,
          agents, licensors, and suppliers harmless from and against any claims,
          actions, demands, losses,
        </Text>
      </ScrollView>
    </View>
  );
};

const Signup = (props) => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const roles = ["Parent", "Teacher", "Clinician"];

  useEffect(() => {
    const { width, height } = Dimensions.get("screen");
    setScreenWidth(width);
    setScreenHeight(height);
  }, []);

  const onFirstNameChange = (newFirstName) => {
    setFirstName(newFirstName);
  };

  const onLastNameChange = (newLastName) => {
    setLastName(newLastName);
  };

  const onDateChange = (event, newDate) => {
    setIsDateModalVisible(false);
    setDateOfBirth(newDate);
  };

  const onPhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  const onRoleChange = (newRole) => {
    setRole(newRole);
  };

  const onEmailChange = (newEmail) => {
    setEmail(newEmail);
  };

  const onPasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const onConfirmPasswordChange = (newConfirmPassword) => {
    setConfirmPassword(newConfirmPassword);
  };

  const onIsCheckedChange = (check) => {
    setIsChecked(check);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            width: screenWidth,
            height: screenHeight,
            paddingTop: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: darkGreen,
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Create a new account
          </Text>

          <Field placeholder="First Name" onChangeText={onFirstNameChange} />
          <Field placeholder="Last Name" onChangeText={onLastNameChange} />
          <Field
            placeholder="Phone Number"
            keyboardType="numeric"
            onChangeText={onPhoneNumberChange}
          />

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
              borderRadius: 10,
              color: darkGreen,
              paddingHorizontal: 20,
              height: "5%",
              width: "78%",
              backgroundColor: "rgb(220,220, 220)",
              marginVertical: 10,
            }}
          >
            <TouchableOpacity onPress={() => setIsDateModalVisible(true)}>
              <Text
                style={{
                  backgroundColor: "rgb(220, 220, 220)",
                  fontSize: 16,

                  color: darkGreen,
                  borderRadius: 25,
                }}
              >
                DOB: {dateOfBirth.toISOString().split("T")[0]}
              </Text>
            </TouchableOpacity>
            {isDateModalVisible && (
              <RNDateTimePicker value={dateOfBirth} onChange={onDateChange} />
            )}
          </View>

          <SelectDropdown
            data={roles}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              onRoleChange(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            dropdownIconPosition={"left"}
            dropdownStyle={styles.dropdown4DropdownStyle}
            rowStyle={styles.dropdown4RowStyle}
            rowTextStyle={styles.dropdown4RowTxtStyle}
            buttonStyle={styles.dropdown4RowButtonStyle}
            defaultButtonText={"Select an Option"}
            buttonTextStyle={{
              ...styles.dropdownButtonTextStyle,
              textAlign: "left",
              color: darkGreen, // add this line
            }}
          />

          <Field
            placeholder="Email Address"
            keyboardType="email-address"
            onChangeText={onEmailChange}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={onPasswordChange}
          />
          <Field
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={onConfirmPasswordChange}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "78%",
              paddingRight: 16,
              marginBottom: 10,
              padding: 10,
            }}
          >
            <CheckBox
              style={{ width: 5, height: 5, borderRadius: 2 }}
              value={isChecked}
              onChange={() => onIsCheckedChange(!isChecked)}
              label=""
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View>
                <Text
                  style={{
                    paddingTop: "1%",
                    color: darkGreen,
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  {"  "}Terms & Conditions
                </Text>
              </View>
            </TouchableOpacity>

            <Modal
              style={{
                alignItems: "center",
                padding: 150,
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 5,
              }}
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <TermsAndConditions />
              <TouchableOpacity
                style={styles.closeModalBtn}
                onPress={() => setModalVisible(false)}
              >
                <Ionicons name="ios-close-circle" size={50} color="#006D77" />
              </TouchableOpacity>
            </Modal>
          </View>

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() =>
              onUserSignUp(
                firstName,
                lastName,
                phoneNumber,
                dateOfBirth,
                role,
                email,
                password,
                confirmPassword,
                isChecked,
                props.navigation.navigate
              )
            }
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: darkGreen, fontWeight: "bold", fontSize: 16 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "35%",
    paddingBottom: "20%",
    paddingHorizontal: "2%",
    width: "100%",
    height: "70%",
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
  },
  modalTextHeader: {
    textAlign: "left",
    fontSize: 20,
    padding: 10,
    paddingBottom: 20,
    fontFamily: "Open Sans",
    fontWeight: "500",
  },
  modalText: {
    textAlign: "left",
    fontSize: 16,
    padding: 10,
    paddingBottom: 20,
    fontFamily: "Open Sans",
    fontWeight: "300",
  },
  closeModalBtn: {
    position: "absolute",
    top: "10%",
    right: 10,
  },
  dropdown4RowButtonStyle: {
    borderRadius: 10,
    color: darkGreen,
    height: "5%",
    width: "78%",

    backgroundColor: "rgb(220,220, 220)",
  },
  DobContainer: {
    flexDirection: "column",
  },
});

export default Signup;
