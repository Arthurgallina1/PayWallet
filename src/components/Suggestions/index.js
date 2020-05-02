import React from "react";
import { Container, Option, Img, Label } from "./styles";

import img1 from "../../imgs/01.png";

const items = [
    {
        key: String(Math.random()),
        img: img1,
        label: "Doações",
    },
    {
        key: String(Math.random()),
        img: img1,
        label: "Money",
    },
];

export default function Suggestions() {
    return (
        <Container>
            {items.map((item) => (
                <Option key={item.key}>
                    <Img source={item.img} />
                    <Label>{item.label}</Label>
                </Option>
            ))}
        </Container>
    );
}
