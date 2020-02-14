import React from "react";
import styled from "styled-components";

//const Container = styled.span``;

interface IProps{
    count:number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => <div>{count}</div>;

export default Number;