import React from 'react';
import { useParams } from 'react-router';

const Hello = (props) => {
    const { num } = useParams();
    const { text } = useParams();
    const { bg } = useParams();

    return (
        <h1>Hello Component {num} {text} {bg} !</h1>
    );
};

export default Hello;