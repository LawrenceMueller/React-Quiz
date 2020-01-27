import React from 'react';
import './art.css';

export default class Art extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-art">
                <div className="art-content">
                    <h1 className="title-art">Art</h1>
                    <div className="btn-art" onClick={this.props.backFromArt}>Home</div>
                </div>
            </div>
        );
    }
}
