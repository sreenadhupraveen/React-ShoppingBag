import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productData: []
        }
    }

    componentWillMount() {
        productData.productsInCart.map((val, key) =>
            productData.productsInCart[key]['p_image'] = `images/T${key}.jpg`
        );
        this.setState({ productData: productData.productsInCart });
    }

    render() {

        return (
            <div className="container">
                <h2>YOUR SHOPPING BAG</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ITEMS</th>
                            <th className="col-xs-2"></th>
                            <th className="col-xs-2">SIZE</th>
                            <th className="col-xs-2">QTY</th>
                            <th className="col-xs-2">PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderResultRows(this.state.productData)}
                    </tbody>
                </table>
            </div>
        );
    }


    renderResultRows(data) {
        var self = this;
        return data.map(product =>
            <tr>
                <td className="col-xs-2"><img className="clickable" src={product.p_image} /></td>
                <td class="col-xs-4">
                    <p>{product.p_name}</p>
                    <p>Style #:{product.p_style}</p>
                    <p>Colour:{product.p_selected_color.name}</p>
                    <span className="clickable">EDIT |</span>
                    <span className="clickable">X REMOVE |</span>
                    <span className="clickable">SAVE FOR LATER</span>
                </td>
                <td className="col-xs-2">{product.p_selected_size.code}</td>
                <td className="col-xs-2"><input id="qty_textbox" type="textbox" value={product.p_quantity} /></td>
                <td className="col-xs-2">{product.p_price}</td>
            </tr>
        );
    }
}

export default App;