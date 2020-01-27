import React from 'react';
import './history.css';

export default class History extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-history">
                <div className="history-content">
                    <h1 className="title-history">History</h1>
                    <div className="btn-history" onClick={this.props.backFromHistory}>Home</div>
                </div>
            </div>
        );
    }
}
