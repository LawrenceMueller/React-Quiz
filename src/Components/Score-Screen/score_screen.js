import React from 'react';
import './score_screen.css';
import Quiz from '../Quiz/quiz';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
`;

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
            home: !this.state.home
        });
    }

    render() {
        if (this.state.home === true) {
            return <Quiz />;
        }
        if (this.props.player_score < 5) {
            return (
                <div className="container-score_screen">
                    <p className="question-score_screen">Better Luck Next Time</p>
                    <Bounce>
                        <h1 className="title-score_screen">
                            {this.props.player_score}/10
                        </h1>
                    </Bounce>
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
        if (this.props.player_score >= 5 && this.props.player_score < 8) {
            return (
                <div className="container-score_screen">
                    <p className="question-score_screen">Pretty Good Job!</p>
                    <Bounce>
                        <h1 className="title-score_screen">
                            {this.props.player_score}/10
                        </h1>
                    </Bounce>
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
        if (this.props.player_score >= 8 && this.props.player_score < 10) {
            return (
                <div className="container-score_screen">
                    <p className="question-score_screen">Wow Great Job!</p>
                    <Bounce>
                        <h1 className="title-score_screen">
                            {this.props.player_score}/10
                        </h1>
                    </Bounce>
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
        return (
            <div className="container-score_screen">
                <p className="question-score_screen">PERFECT SCORE!!!</p>
                <Bounce>
                    <h1 className="title-score_screen">
                        {this.props.player_score}/10
                    </h1>
                </Bounce>
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