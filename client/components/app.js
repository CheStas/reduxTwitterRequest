import React, { Component } from 'react';
import TwitterList from '../containers/twitter-list';
import Header from '../containers/header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <TwitterList />
            </div>
        );
    }
}
