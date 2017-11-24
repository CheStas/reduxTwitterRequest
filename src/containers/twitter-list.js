import React, { Component } from 'react';
import { connect } from 'react-redux';

class TwitterList extends Component {

    renderList() {
        return this.props.twitters.map(twitt => {
            return (
                <li key={twitt.id}>{twitt.text}</li>
            )
        })
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        twitters: state.twitters
    }
}

export default connect(mapStateToProps)(TwitterList);
