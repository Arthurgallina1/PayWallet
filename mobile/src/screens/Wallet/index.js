import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import {
    Wrapper,
    Container,
    Header,
    Balance,
    BalanceContainer,
    BalanceTitle,
} from "./styles";
import Gastos from "../../components/Gastos";

import api from "../../utils/api";

export default function Wallet() {
    const [gastos, setGastos] = useState([]);
    const [total, setTotal] = useState("0");
    const [err, setErr] = useState({ err: "err" });

    useEffect(() => {
        //load all users on db. headers: user id that logged in.
        async function loadUsers() {
            try {
                const response = await api.post("/gastos/index", {
                    user_id: 2,
                });
                setGastos(response.data);
            } catch (err) {
                setErr(err);
                console.log(err);
            }
        }
        loadUsers();
    }, []);

    // useEffect(() => {
    //     function calculaTotal() {
    //         if (gastos) {
    //             const total = gastos.reduce((acc, valor) => acc + valor);
    //             setTotal(total);
    //         }
    //     }
    //     calculaTotal();
    // }, [total]);

    return (
        <Wrapper>
            <Container>
                <Header>
                    <BalanceContainer>
                        <BalanceTitle>Meu Gastos</BalanceTitle>
                        <Balance>R$ 175,00</Balance>
                    </BalanceContainer>
                </Header>
                <Gastos gastos={gastos} />
            </Container>
        </Wrapper>
    );
}
