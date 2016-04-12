module.hot.accept();

require('./index.css');

var React = require('react');
var ReactDom = require('react-dom')
var Header = require('../../components/header/header');


var App = React.createClass({
    getInitialState: function () {
        return {
            username: '小张'
        };
    },
    render: function () {
        return (
            <div className="main">
                <Header username={this.state.username} />
                <div className="content-wrap">
                    <h1>Main - Entry!!</h1>
                    <a href="../help/index.html">helper</a>
                </div>
            </div>
        );
    }
});

ReactDom.render(<App />, document.getElementById('container')); 
