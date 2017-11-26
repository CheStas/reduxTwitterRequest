import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTwitters } from '../actions';
import { bindActionCreators } from 'redux';
import trump from '../img/trump.png';
import hillary from '../img/hillary.png';

class Header extends Component {

    render() {
        return (
            <header>
                <button className="button--red" onClick={() => this.props.fetchTwitters('Trump')}>
                    <img src={trump} />
                </button>
                <button className="button--blue" onClick={() => this.props.fetchTwitters('Hillary')}>
                    <img src={hillary} />
                </button>
            </header>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTwitters }, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);
