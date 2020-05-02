import React from "react";
import { Container, Details, Img, Title, Description } from "./styles";
import img from "../../imgs/01.png";

export default function Banner() {
    return (
        <Container>
            <Details>
                <Title>Cobre um amigo</Title>
                <Description>
                    Mantenha suas parcerias em dia, faça suas cobranças.
                </Description>
            </Details>
            <Img source={img} />
        </Container>
    );
}
