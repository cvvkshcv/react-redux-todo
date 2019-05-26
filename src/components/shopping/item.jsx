import React, { Component } from 'react';

class Item extends Component {

    render() {
        let { item } = this.props;

        return (
            <tr>
                <td>{item.name}</td>
                <td><span className="badge badge-warning badge-pill">{item.count || 'Zero'}</span></td>
                <td><button className="btn btn-primary btn-xs" onClick={() => this.props.countChange(item, 'incr') } >+</button></td>
                <td><button className="btn btn-primary btn-xs" onClick={() => this.props.countChange(item, 'decr') }>-</button></td>
            </tr>
        );
    }
}

export default Item;