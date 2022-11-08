import styled from 'styled-components';

export const Container = styled.div`
    color: ${(props) => props.theme.font.secondary};
    font-size: 20px;
`;

export const Circles = styled.div`
    display: flex;
    align-items: center;
`;

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    background: ${(props) => props.theme.component.primary};
    color: ${(props) => props.theme.component.color};
    border-radius: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    margin: 10px;
`;