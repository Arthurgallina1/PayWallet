import styled from "styled-components/native";

export const GastoInput = styled.TextInput`
    background: rgba(255, 255, 255, 0.5);
    border: 0;
    padding: 4px 8px;
    margin-bottom: 10px;
    border-radius: 8px;
    margin-top: 5px;
`;

export const FormView = styled.View`
    border-radius: 16px;
    background: white;
    padding: 25px 0;
`;

export const SubmitBox = styled.View`
    margin-top: 35px;
    justify-content: center;
    align-items: center;
`;

export const InputBox = styled.View`
    padding: 4px 0px;
    margin: 0 25px;
    flex-direction: row;
    border-bottom-color: #cccccc;
    border-bottom-width: 1px;

    align-items: center;
`;

export const ErrorText = styled.Text`
    color: red;
    margin: 15px;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;
