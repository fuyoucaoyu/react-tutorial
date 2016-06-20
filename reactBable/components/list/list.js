
import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {curPage: 0};
        this.updatePage = this.updatePage.bind(this);
    }

    updatePage(event) {
        console.log('upate page');
        this.setState({curPage: this.state.curPage + 1});
    }

    render() {
        return (
                <div>
                    <h2 onClick={this.updatePage}>hello list module</h2>
                </div>
            );
    }
}

export default List;