module.hot.accept();

require('./main.css');

var React = require('react');
var ReactDom = require('react-dom')
var Header = require('../components/header/header');


var App = React.createClass({
    getInitialState: function () {
        return {
            username: '小张!'
        };
    },
    render: function () {
        return (
            <div className="main">
                <Header username={this.state.username} />
                <div className="content-wrap">
                    <h1>Hellow Webpack!</h1>
                </div>
            </div>
        );
    }
});

ReactDom.render(<App />, document.getElementById('container')); 
