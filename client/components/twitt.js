import React, { Component } from 'react';
import retweetSymbol from '../img/retweet-symbol.svg';
import verifySymbol from '../img/verify.png';
import likeSymbol from '../img/like.svg';

export default class Twitt extends Component {

    createTime(time) {
        const diffTime = new Date() - new Date(time);
        const roundedHours = Math.round(diffTime / 1000 / 3600);
        return roundedHours !== 0 ? roundedHours + 'h' : Math.round(diffTime / 1000 / 60) + 'm';
    }

    render() {
        return (
            <div className="twittWrap">
                {
                    this.props.twitt.retweeted_status ? (
                        <div>
                            <span className="retweeted">
                                <object type="image/svg+xml" data={retweetSymbol} className="icon"></object>
                                <a className="linkToUser" href={`https://twitter.com/${this.props.twitt.user.screen_name}`} target="_blank">
                                    {this.props.twitt.user.name}
                                </a>
                                Retweeted
                                </span>
                            <Twitt twitt={this.props.twitt.retweeted_status} />
                        </div>
                    ) : (
                            <div className="twittItem">
                                <a className="image" href={`https://twitter.com/${this.props.twitt.user.screen_name}`} target="_blank">
                                    <img src={this.props.twitt.user.profile_image_url} />
                                </a>
                                <div className="mainSection">
                                    <div className="userSection">
                                        <a className="linkToUser name" href={`https://twitter.com/${this.props.twitt.user.screen_name}`} target="_blank">
                                            {this.props.twitt.user.name}
                                        </a>
                                        {
                                            this.props.twitt.user.verified && <img className="icon" src={verifySymbol} />
                                        }
                                        <span className="screenName">@{this.props.twitt.user.screen_name}</span>
                                        <span className="time">{this.createTime(this.props.twitt.created_at)}</span>
                                    </div>
                                    <a className="text" href={`https://twitter.com/${this.props.twitt.user.screen_name}/status/${this.props.twitt.id_str}`} target="_blank">{this.props.twitt.text}</a>
                                    <div className="footerSection">
                                        <a href={`https://twitter.com/intent/retweet?tweet_id=${this.props.twitt.id_str}`} target="_blank">
                                            <object type="image/svg+xml" data={retweetSymbol} className="icon">retweet</object>
                                            {this.props.twitt.retweet_count}
                                        </a>
                                        <a href={`https://twitter.com/intent/like?tweet_id=${this.props.twitt.id_str}`} target="_blank">
                                            <object type="image/svg+xml" data={likeSymbol} className="icon">like</object>
                                            {this.props.twitt.favorite_count}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                }
            </div>
        );
    }
}
