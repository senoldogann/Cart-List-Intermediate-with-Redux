import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, NavItem, Badge } from 'reactstrap';
import { connect, } from "react-redux"
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom";
class CartSummary extends Component {

    renderEmpty() {
        // * Sepet boşkenki operasyonu yazıyoruz
        return (
            <NavItem>
                <NavLink>Your cart empty</NavLink>
            </NavItem>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                 Your cart
                </DropdownToggle>

                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge className="bg-danger" onClick={() => this.props.actions.removeFromCart(cartItem.product)}><i className="fa fa-trash"></i></Badge>
                                <span style={{marginLeft:"0.7em"}}>{cartItem.product.productName}</span>
                                <Badge className="bg-dark " style={{marginLeft:"1em"}} >{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }

                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>Go to Cart</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);