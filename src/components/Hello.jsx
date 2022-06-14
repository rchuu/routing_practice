import React from 'react';
import { useParams } from 'react-router';

const Hello = (props) => {
    const { num } = useParams();

    return (
        <h1>Hello Component {num} !</h1>
    );
};

export default Hello;