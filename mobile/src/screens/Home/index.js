import React from "react";
import { Text } from "react-native";
import Suggestions from "../../components/Suggestions";
import Tips from "../../components/Tips";
import Activities from "../../components/Activities";
import Banner from "../../components/Banner";
import {
    Wrapper,
    Header,
    Balance,
    BalanceContainer,
    BalanceTitle,
    Container,
} from "./styles";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons
                        name='qrcode-scan'
                        size={30}
                        color='#10c86e'
                    />
                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 0, 00</Balance>
                    </BalanceContainer>

                    <AntDesign name='gift' size={30} color='#10c86e' />
                </Header>
                <Suggestions />
                <Activities />
                <Tips />
                <Banner />
            </Container>
        </Wrapper>
    );
}
