import React, { useState } from "react";
import { Formik } from "formik";
import { View, Text, TextInput, Button, Picker } from "react-native";
import { GastoInput, FormView, SubmitBox, InputBox, ErrorText } from "./styles";
import api from "../../utils/api";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

// "user_id": 1,
// "valor": 150,
// "categoria": "Outros",
// "nome" : "Puta"
export default function GastoForm({ handleChange }) {
    const [picker, setPicker] = useState("10");
    const [stat, setStat] = useState("");
    return (
        <FormView>
            <Formik
                initialValues={{
                    nome: "",
                    valor: "",
                    categoria: "",
                    user_id: 2,
                }}
                onSubmit={async (values, { setStatus, resetForm }) => {
                    // prettier-ignore
                    try {
                        const res = await api.post("/gastos", {
                            user_id: 2,
                            nome: values.nome,
                            categoria: values.categoria,
                            valor: values.valor
                        });
                        handleChange(valor)
                        setStat('Gasto cadastrado com sucesso!');
                        resetForm();
                    } catch (err) {
                        setStatus('Não foi possível adicionar o gasto!');
                        setStat('')
                    }
                }}
            >
                {(formikprops) => (
                    <View>
                        <InputBox>
                            <AntDesign
                                name='downcircleo'
                                size={22}
                                color={"#D5001B"}
                                onPress={formikprops.handleSubmit}
                            />
                            <GastoInput
                                placeholder='Nome do gasto'
                                onChangeText={formikprops.handleChange("nome")}
                                value={formikprops.values.nome}
                            ></GastoInput>
                        </InputBox>
                        <InputBox>
                            <AntDesign
                                name='minussquareo'
                                size={22}
                                color={"#D5001B"}
                                onPress={formikprops.handleSubmit}
                            />
                            <GastoInput
                                placeholder='Categoria'
                                onChangeText={formikprops.handleChange(
                                    "categoria"
                                )}
                                value={formikprops.values.categoria}
                            ></GastoInput>
                        </InputBox>
                        <InputBox>
                            <MaterialIcons
                                name='attach-money'
                                size={24}
                                color={"#D5001B"}
                                onPress={formikprops.handleSubmit}
                            />
                            <GastoInput
                                keyboardType='numeric'
                                placeholder='Valor'
                                onChangeText={formikprops.handleChange("valor")}
                                value={formikprops.values.valor}
                            ></GastoInput>
                        </InputBox>

                        {/* <Picker
                            selectedValue={picker}
                            // mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => {
                                formikprops.handleChange("categoria");
                                setFieldValue("categoria", itemValue);
                                setPicker(itemValue);
                            }}
                        >
                            <Picker.Item label='Java' value='java' />
                            <Picker.Item label='JavaScript' value='js' />
                        </Picker> */}
                        {/* {!!formikprops.status && (
                            <FormError>{formikprops.status}</FormError>
                        )} */}
                        {formikprops.status && (
                            <ErrorText>{formikprops.status}</ErrorText>
                        )}
                        <SubmitBox>
                            <AntDesign
                                name='checkcircle'
                                size={50}
                                color={"#D5001B"}
                                onPress={formikprops.handleSubmit}
                            />
                        </SubmitBox>
                    </View>
                )}
            </Formik>
            {<ErrorText>{stat}</ErrorText>}
        </FormView>
    );
}
