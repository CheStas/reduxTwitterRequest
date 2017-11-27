import React, { Component } from 'react';
import { connect } from 'react-redux';
import Twitt from '../components/twitt';
import { fetchMoreTwitters } from '../actions';
import { bindActionCreators } from 'redux';

class TwitterList extends Component {

    renderList() {
        return this.props.twitters.collections.map(twitt => {
            return (
                <Twitt key={twitt.id} twitt={twitt} />
            )
        })
    }

    render() {
        return (
            <section className="twittersWrap">
                {this.renderList()}
                {
                    this.props.twitters.nextPage && this.props.twitters.nextPage.length > 0 && (
                        <button className="button--loadMore" onClick={() => this.props.fetchMoreTwitters(this.props.twitters.nextPage)}>load more</button>
                    )
                }
            </section>
        )
    }
}

function mapStateToProps(state) {
    return {
        twitters: state.twitters,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMoreTwitters }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TwitterList);
