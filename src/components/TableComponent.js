import React from 'react';

class TableComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { edit: false };
    }

    createDetailRow(item) {
        return (
            <tr className="tablerow">
                <td className="col-sm-9 col-xs-12">
                    <div className="row">
                        <div className="col-sm-5 col-xs-6">
                            <img src={`./images/T${item.p_id}.jpg`} alt={`${item.p_name}`} />
                        </div>
                        <div className="col-sm-7 col-xs-6">
                            <b><p className="toupper item-name">{item.p_name}</p></b>
                            <p className="item-info ">Style #: <span className="toupper">{item.p_style}</span></p>
                            <p className="item-info">Color: {item.p_selected_color.name}</p>
                            <div className="visible-xs">
                                <span className="toupper item-info">Size: </span><span className="toupper item-info">{item.p_selected_size.code}</span>
                            </div>
                            <div className="visible-xs">
                                <span className="toupper item-info">qty: </span><input className="center form-control smlqty" type="number" data-price={item.p_price} data-id={item.p_id} value={item.p_quantity} />
                            </div>
                        </div>
                    </div>
                </td>
                <td className="col-sm-1 hidden-xs center toupper">
                    {item.p_selected_size.code}
                </td>
                <td className="col-sm-1 hidden-xs center">
                    <input className="center form-control" type="number" onChange={this.handleOnChange} data-price={item.p_price} data-id={item.p_id} value={item.p_quantity} />
                </td>
            </tr>
        );
    }


    render() {
        let rows = [];

        this.props.cartItems.forEach((item) => {
            rows.push(this.createDetailRow(item));
        });


        return (
            <table className="table">
                <thead className="tableheader">
                    <tr>
                        <th className="visible-xs">
                            <div className="visible-xs item-head col-xs-8">YOUR SHOPPING BAG</div>
                            <div className="visible-xs item-head col-xs-4">{this.props.cartItems.length} Items</div>
                        </th>
                        <th className="col-sm-9 hidden-xs">{this.props.cartItems.length} Items</th>
                        <th className="col-sm-1 center hidden-xs">Size</th>
                        <th className="col-sm-1 center hidden-xs">Qty</th>
                        <th className="col-sm-1 right hidden-xs">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                {this.state.edit && this.props.editItem(event.target.dataset.id)}
            </table>
        );
    }

}


export default TableComponent;