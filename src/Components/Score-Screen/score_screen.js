import React from 'react';
import './score_screen.css';
import Quiz from '../Quiz/quiz';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;`;

export default class Score_Screen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false
        };
        this.handleHome = this.handleHome.bind(this);
    }

    handleHome() {
        this.setState({
            home: !this.state.home,
        });
    }

    render() {
        
        if (this.state.home === true) {
            return (
                <Quiz/>
            );
        }

        return (
            <div className="container-score_screen">
                <h1 className="title-score_screen">Score Screen</h1>
                    <h1>{this.props.player_score}</h1>
                <div
                    className="btn-score_screen"
                    id="btn-score_screen"
                    onClick={this.handleHome}
                >
                    Home
                </div>
            </div>
        );
    }
}