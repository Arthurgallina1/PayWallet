import React, { Component, useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";
import {
    ModalContainer,
    ModalView,
    Header,
    BalanceTitle,
    CloseButton,
} from "./styles";

import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import GastoForm from "../../components/GastoForm";

const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <ModalContainer>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <ModalView>
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}
                        <Header>
                            <BalanceTitle>ADICIONAR GASTO</BalanceTitle>
                            {/* <CloseButton></CloseButton> */}
                        </Header>

                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: "#2196F3",
                            }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </ModalView>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </TouchableHighlight>
        </ModalContainer>
    );
};

const styles = StyleSheet.create({
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default App;
