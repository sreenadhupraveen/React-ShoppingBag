
console.log('BagItem page calling');
import React from 'react';
import $ from 'jquery';
import TableComponent from './TableComponent.js'

class BagItems extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: []
        };
    }

    componentWillMount() {
        this.setState({ cartItems: productData.productsInCart });
    }

    render() {
        if (this.state.cartItems.length !== 0) {
            return (
                <section>
                    <TableComponent
                        cartItems={this.state.cartItems}
                        quantityChange={this.quantityChange}
                        removeItem={this.removeItem}
                        editItem={this.editItem} />
                </section>
            )
        } else {
            return (
                <section>
                </section>
            )
        }
    }
}

export default BagItems;

