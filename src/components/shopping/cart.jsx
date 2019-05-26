import React, { Component } from 'react';
import Item from './item';

class Cart extends Component {
    render() {
        return (
            <table style={{width: 350}} >
                <tbody>
                    {
                        this.props.items.map((item, i) => <Item item={item} countChange={this.props.countChange} key={i} />)
                    }
                </tbody>
            </table>
        );
    }
}

export default Cart;