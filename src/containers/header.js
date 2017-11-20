import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTwitters } from '../actions';
import { bindActionCreators } from 'redux';

class Header extends Component {

    render() {
        return (
            <div>
                <h1>Choose a person</h1>
                <button onClick={() => this.props.fetchTwitters('Trump')}>Trump</button>
                <button onClick={() => this.props.fetchTwitters('Hillary')}>Hillary</button>
                <h3>{this.props.person}</h3>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTwitters: fetchTwitters }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);