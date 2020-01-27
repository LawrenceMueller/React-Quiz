import React from 'react';
import './science.css';

import Data from '../../Questions/science-questions.json';

export default class Science extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question_count: 0
        };
    }

    render() {
        const current_question = Data[this.state.question_count];
        console.log(current_question);
        return (
            <div className="container-science">
                <h1 className="title-science">Science</h1>
                <p className="question-science">{current_question.question}</p>
                <div className="btn-science" >{current_question.answer1}</div>
                <div className="btn-science" >{current_question.answer2}</div>
                <div className="btn-science" >{current_question.answer3}</div>
                <div className="btn-science" >{current_question.answer4}</div>
                <div className="btn-science" id="btn-home-science" onClick={this.props.backFromScience}>Home</div>
            </div>
        );
    }
}
