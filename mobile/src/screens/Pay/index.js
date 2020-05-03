import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import {
    WrapperPay,
    NewText,
    Container,
    DepesaView,
    Balance,
    BalanceTitle,
    Valor,
    ValorText,
} from "./styles";
import AddModal from "../../components/AddModal";
import Gastos from "../../components/Gastos";
import GastoForm from "../../components/GastoForm";

import api from "../../utils/api";

export default function Wallet() {
    const [valor, setValor] = useState("0,00");

    function handleChange(value) {
        setValor(value);
    }

    return (
        <WrapperPay>
            <Container>
                <NewText> Nova despesa </NewText>
                <DepesaView>
                    <BalanceTitle>Valor da despesa</BalanceTitle>
                    <Balance>R$ 0,00</Balance>
                </DepesaView>
                <GastoForm handleChange={handleChange} />
                {/* <AddModal /> */}
            </Container>
        </WrapperPay>
    );
}
