import React from 'react';
import './science.css';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;`;

export default class Science extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="science-content">
                    <Bounce>
                        <h1>Science</h1>
                    </Bounce>
                    <div className="btn" onClick={this.props.backFromScience}>Home</div>
                </div>
            </div>
        );
    }
}
