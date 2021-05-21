// SEPET DETAYLARI OLACAK
import React, { Component } from 'react'
import { connect, } from "react-redux"
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from 'reactstrap';
import alertify from "alertifyjs"
class CartDetail extends Component {
    removeFromCart(product){
        // Sepetten silme
        this.props.actions.removeFromCart(product)
        alertify.success(product.productName + " successfully deleted")

    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(carItem => (

                            <tr key={carItem.id}>
                                <th scope="row">{carItem.product.id}</th>
                                <td>{carItem.product.productName}</td>
                                <td>{carItem.product.unitPrice}</td>
                                <td>{carItem.product.quantity}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.removeFromCart(carItem.product)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>

                        ))
                        }


                    </tbody>
                </Table>
            </div>
        )
    }
}

// DEĞERLERİ ALMAK İÇİN KULLANILIR
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

// AKSİYONLAR KULLANMAK İÇİN  KULLANILIR
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);