import React from "react";
import { Text } from "react-native";

import {
    Container,
    Card,
    CardHeader,
    Description,
    Bold,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
} from "./styles";
import { Feather, MaterialIcons } from "@expo/vector-icons";

import img from "../../imgs/01.png";

export default function Gastos({ gastos }) {
    return (
        <Container>
            {gastos.map((gasto) => (
                <Card key={gasto.id}>
                    <CardHeader>
                        <MaterialIcons
                            name='local-grocery-store'
                            color='#fff'
                            size={48}
                        />
                        <Description>
                            <Bold>{gasto.nome}</Bold>
                            {"\n"}
                            {gasto.categoria}
                        </Description>
                    </CardHeader>
                    {/* <CardBody>
                        <UserName>Arthur Gallina</UserName>
                    </CardBody> */}
                    <CardFooter>
                        <Details>
                            <Value>R$ {gasto.valor}</Value>
                            <Divider></Divider>
                            <Feather name='lock' color='#fff' />
                            <Date>Há 2 anos</Date>
                        </Details>
                    </CardFooter>
                </Card>
            ))}
        </Container>
    );
}
