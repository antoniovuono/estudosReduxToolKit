import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    ActionButton,
    ButtonContent,
    Container,
    LogotipoImage,
    ResultLabel,
} from "./styles";
import { increment, decremenet } from "../../counterStore/slicers/counterSlicer";
import { RootState } from "../../counterStore/store";

const Counter = () => {
    // Vamos acessar o estado usando o useSelector
    const count = useSelector((state: RootState) => state.counter.value);
    // Vamos manipular o estado com o dispatch:
    const dispatch = useDispatch();

    const handleIcrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decremenet());
    };

    return (
        <Container>
            <LogotipoImage
                source={{
                    uri: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
                }}
                resizeMode="contain"
            />

            <ButtonContent>
                <ActionButton onPress={handleDecrement}>
                    <AntDesign name="minuscircleo" size={24} color="black" />
                </ActionButton>

                <ResultLabel>{count}</ResultLabel>

                <ActionButton onPress={handleIcrement}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </ActionButton>
            </ButtonContent>
        </Container>
    );
};

export default Counter;
