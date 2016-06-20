// module.hot.accept();

require('./index.css');

import React from 'react';
import {render} from 'react-dom';
import List from '../../components/list/list.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>hello babel!!</h1>
                <List />
                <h2>hello end</h2>
            </div>
        );
    }
}

render(<App/>, document.getElementById('container'))