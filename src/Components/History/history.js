import React from 'react';
import './history.css';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;`;

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="history-content">
                    <Bounce>
                        <h1>History</h1>
                    </Bounce>
                    <div className="btn" onClick={this.props.backFromHistory}>Home</div>
                </div>
            </div>
        );
    }
}
