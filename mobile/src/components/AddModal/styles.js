import styled from "styled-components/native";

export const ModalContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const ModalView = styled.View`
    margin: 20px;
    background-color: #ff6a00;
    border: 1px solid blue;
    border-radius: 20px;
    padding: 8px 0;
    align-items: center;
    box-shadow: 10px 5px 5px black;
    elevation: 5;
`;

export const BalanceTitle = styled.Text`
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    font-weight: bold;
`;
export const CloseButton = styled.TouchableHighlight``;
export const Header = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;
