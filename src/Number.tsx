import React from "react";


interface IProps{
    count:number;
}

const Number: React.FunctionComponent<IProps> = ({count}) => <div>{count}</div>;

export default Number;