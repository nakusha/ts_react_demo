import React from "react";
import styled from "styled-components";
/*
추후 interface가 많이 추가되기떄문에 styled에 붙이는건interface를 안붙이는것도 방법중하나.
interface IContainerProps{
    isBlue:boolean;
}

//const Container = styled.span<IContainerProps>`
*/
const Container = styled.span<{isBlue: boolean}>`
    color:${props =>props.isBlue ? props.theme.blueColor : "black"};
`;

interface IProps{
    count:number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => <Container isBlue={count > 10}>{count}</Container>;

export default Number;