import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LogotipoImage = styled.Image`
    width: 150px;
    height: 150px;
`;

export const ButtonContent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ActionButton = styled.TouchableOpacity`
    padding: 15px;
`;

export const ResultLabel = styled.Text`
    font-size: 30px;
    font-weight: bold;
`;
