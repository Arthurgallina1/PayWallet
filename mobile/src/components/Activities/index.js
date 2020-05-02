import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from "./styles";
import img from "../../imgs/01.png";

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source={img} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@arthur</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Arthur Gallina</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 15,00</Value>
                        <Divider></Divider>
                        <Feather name='lock' color='#fff' />
                        <Date>Há 2 anos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons
                                name='comment-outline'
                                size={14}
                                color={"#fff"}
                            />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name='hearto' size={14} color={"#fff"} />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
