import React from 'react';
import styled from 'styled-components';

const StyledNameCard = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 2px;
    height: 250px;
    width: 200px;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    /* color: red; */
`

const Avatar = styled.img`
    /* border: 1px solid red; */
    height: 75px;
    width: 75px;
    border-radius: 100%;
    margin: 0 auto 20px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.03);
`

const Button = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    display: inline-block;
    padding: 0.5rem;
    text-align: left;
    margin: 2rem 0;
`

const NameCard = props => (
    <StyledNameCard>
        <Avatar src={props.avatar} />
        <div>{props.name}</div>
        <div>{props.title}</div>
        <Button onClick={() => props.buttonHandler(props)}>Click Me</Button>
    </StyledNameCard>
)

export default NameCard