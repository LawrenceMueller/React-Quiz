import React from 'react';
import './science.css';
import Quiz from '../Quiz/quiz';

import Data from '../../Questions/science-questions.json';

export default class Science extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question_count: 0,
            player_score: 0
        };
        this.handleSelectedAnswer = this.handleSelectedAnswer.bind(this);
    }

    componentDidMount() {
        this.setState({
            player_score: 0,
            question_count: 0
        });
    }

    handleSelectedAnswer(event) {
        if (event.currentTarget.getAttribute('value') === Data[this.state.question_count].correct) {
            this.setState({
                player_score: this.state.player_score + 1,
                question_count: this.state.question_count + 1
            });
        } else {
            this.setState({
                question_count: this.state.question_count + 1
            });
        }
    }

    render() {
        const current_question = Data[this.state.question_count];
        if(Data[this.state.question_count] === undefined){
            return <Quiz/>
        }
        return (
            <div className="container-science">
                <h1 className="title-science">Science</h1>
                <p className="question-science">{current_question.question}</p>
                <div
                    className="btn-science"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer1}
                >
                    {current_question.answer1}
                </div>
                <div
                    className="btn-science"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer2}
                >
                    {current_question.answer2}
                </div>
                <div
                    className="btn-science"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer3}
                >
                    {current_question.answer3}
                </div>
                <div
                    className="btn-science"
                    onClick={this.handleSelectedAnswer}
                    value={current_question.answer4}
                >
                    {current_question.answer4}
                </div>
                <div
                    className="btn-science"
                    id="btn-home-science"
                    onClick={this.props.backFromScience}
                >
                    Home
                </div>
            </div>
        );
    }
}