import React from 'react';
import './quiz.css';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} infinite`;

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="home-content">
                    <Bounce><h1>Quiz Time!</h1></Bounce>
                    <div className="btn">Science</div>
                    <div className="btn">History</div>
                    <div className="btn">Art</div>
                </div>
            </div>
        );
    }
}
