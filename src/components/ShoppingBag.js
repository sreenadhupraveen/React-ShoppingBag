
console.log('shoppingbag page calling');
import React from 'react';
import BagItem from './BagItem.js'

class ShoppingBag extends  React.Component {

    render() {
        return(
            <section>
                <header>
                    <h1>YOUR SHOPPING BAG</h1>
                </header>
                <BagItem />
            </section>

        );
    } 

}

export default ShoppingBag
