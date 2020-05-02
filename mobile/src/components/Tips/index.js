import React from "react";
import { Container, Option, Title, Img } from "./styles";

import img from "../../imgs/01.png";
export default function Tips() {
    const items = [
        {
            key: 1,
            img: img,
            title: "Pague suas contas sem sair de casa",
            bgColor: "#172c4a",
        },
        {
            key: 2,
            img: img,
            title: "Pague suas contas sem sair de casa",
            bgColor: "#6a0159",
        },
        {
            key: 3,
            img: img,
            title: "Pague suas contas sem sair de casa",
            bgColor: "#00ab4b",
        },
        {
            key: 3,
            img: img,
            title: "Pague suas contas sem sair de casa",
            bgColor: "#ba2f76",
        },
    ];

    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key} bgColor={item.bgColor}>
                    <Title>{item.title}</Title>
                    <Img source={item.img} />
                </Option>
            ))}
        </Container>
    );
}
