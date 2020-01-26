import React from 'react';
import './art.css';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;`;

export default class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="art-content">
                    <Bounce>
                        <h1>Art</h1>
                    </Bounce>
                    <div className="btn" onClick={this.props.backFromArt}>Art</div>
                </div>
            </div>
        );
    }
}
