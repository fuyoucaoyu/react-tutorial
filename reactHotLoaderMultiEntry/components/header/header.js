require('./header.css');

var React = require('react');

var Header = React.createClass({
    getInitialState: function () {
        return {
            systemName: 'React + Webpack '
        };
    },
    render: function () {
        var welcomeMsg;
        if (this.props.username) {
            welcomeMsg = '欢迎，' + this.props.username + '！'
        };
        return (
                <div className="header-content">
                    <h1>{this.state.systemName}</h1>
                    {
                        welcomeMsg ? (
                        <div className="user-wrap">
                            <span className="welcome-user">{welcomeMsg}</span>
                        </div>
                        ) : null
                    }
                </div>
            );
    }
});

module.exports = Header;