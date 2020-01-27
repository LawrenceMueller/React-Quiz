import React from 'react';
import './quiz.css';
import Science from '../Science/science';
import History from '../History/history';
import Art from '../Art/art';

import { bounce } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Bounce = styled.div`
    animation: 2s ${keyframes`${bounce}`} infinite;
`;

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            science: false,
            history: false,
            art: false,
            hingeAnimation: false,
            score: 0
        };
        this.handleScience = this.handleScience.bind(this);
        this.handleHistory = this.handleHistory.bind(this);
        this.handleArt = this.handleArt.bind(this);
    }

    handleScience() {
        this.setState({
            science: !this.state.science,
            hingeAnimation: !this.state.hingeAnimation
        });
    }

    handleHistory() {
        this.setState({
            history: !this.state.history,
            hingeAnimation: !this.state.hingeAnimation
        });
    }

    handleArt() {
        this.setState({
            art: !this.state.art,
            hingeAnimation: !this.state.hingeAnimation
        });
    }

    render() {
        const hinge = this.state.hingeAnimation;
        console.log(hinge);

        if (this.state.science === true) {
            return (
                <Science
                    backFromScience={this.handleScience}
                    score={this.state.score}
                />
            );
        }
        if (this.state.history === true) {
            return (
                <History
                    backFromHistory={this.handleHistory}
                    score={this.state.score}
                />
            );
        }
        if (this.state.art === true) {
            return (
                <Art backFromArt={this.handleArt} score={this.state.score} />
            );
        }
        return (
            <div className="container-quiz">
                <Bounce>
                    <h1 className="title-quiz">Quiz Time!</h1>
                </Bounce>
                <div
                    className="btn-quiz"
                    id="first-btn-quiz"
                    onClick={this.handleScience}
                >
                    Science
                </div>
                <div className="btn-quiz" onClick={this.handleHistory}>
                    History
                </div>
                <div className="btn-quiz" onClick={this.handleArt}>
                    Art
                </div>
            </div>
        );
    }
}
